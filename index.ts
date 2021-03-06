import { hostname, tmpdir } from "os";
import { readFile, writeFile, writeFileSync } from "fs";
import { join } from "path";
import { request } from "http";

import { mesos } from "./proto/messages";
import * as debug from "debug";
import * as express from "express";
import * as bodyParser from "body-parser";

const log = debug("SimpleScheduler:log");

const ENDPOINT_PATH = "/api/v1/scheduler";
const Call = mesos.scheduler.Call;
const Event = mesos.scheduler.Event;
const DEFAULT_PORT = 9090;

interface Config extends mesos.IFrameworkInfo {
  port?: number;
  stateFile?: string;
  frameworkInfoFile?: string;
}

const defaultOptions: Config = {
  user: "root",
  name: "simple_framework",
  failover_timeout: 3600,
  hostname: hostname(),
  webui_url: `http://${hostname()}:${DEFAULT_PORT}`,
  checkpoint: true,
  port: DEFAULT_PORT,
  stateFile: join(tmpdir(), "state.json"),
  frameworkInfoFile: join(tmpdir(), "framework.json")
};

class SimpleScheduler {
  mesosStreamId: string;
  taskId: number;
  commandQueue: string[] = [];
  tasksState: { [key: string]: mesos.ITaskStatus } = {};
  frameworkInfo: mesos.FrameworkInfo;
  server: Express.Application;
  options: Config;

  constructor(options = {}) {
    // Take user options, falling back to default ones.
    this.options = { ...defaultOptions, ...options };
    this.setFrameworkInfo(this.options, err => {
      this.subscribe(err => {
        if (err) {
          return console.error("ERROR: Problem with subscription");
        }
      });
      this.startServer();
    });
  }

  /**
   * Tries to set Framework Info from file defined in options.frameworkInfoFile.
   * If the file is not available, get information from the Scheduler options.
   *
   * @param {Config} options Scheduler options
   * @param {Function} callback - The callback that signals that Framework Info is set
   */
  setFrameworkInfo(options: Config, callback) {
    readFile(options.frameworkInfoFile, (err, buf) => {
      if (err) {
        this.frameworkInfo = new mesos.FrameworkInfo({
          user: options.user,
          name: options.name,
          failover_timeout: options.failover_timeout,
          checkpoint: options.checkpoint,
          hostname: options.hostname,
          webui_url: options.webui_url
        });
      } else {
        let parsedFI;
        try {
          parsedFI = JSON.parse(buf.toString());
        } catch (e) {
          return callback(err);
        }
        this.frameworkInfo = new mesos.FrameworkInfo(parsedFI);
      }
      callback();
    });
  }

  /**
   * Sends the call to kill a specific task.
   * https://mesos.apache.org/documentation/latest/scheduler-http-api/#kill
   *
   * @param {string} id Task ID
   * @param {Function} callback - The callback that signals that Framework Info is set
   */
  kill(id: string, callback) {
    if (!this.tasksState[id]) {
      return callback(new Error(`Unknown task ${id}`));
    }

    const update = this.tasksState[id];
    console.log(`Kill task ${id} [${update}]"`);

    const killCall = new Call({
      type: Call.Type.KILL,
      kill: new Call.Kill({
        task_id: update.task_id,
        agent_id: update.agent_id
      })
    });

    return this.call(killCall, callback);
  }

  subscribe(callback) {
    const subscribeCall = new Call({
      framework_id: this.frameworkInfo.id,
      type: Call.Type.SUBSCRIBE,
      subscribe: new Call.Subscribe({
        framework_info: this.frameworkInfo
      })
    });

    const subscribeCallString = JSON.stringify(subscribeCall.toJSON());

    this.mesosRequest(
      subscribeCall,
      {
        "Content-Type": "application/json",
        "Content-Length": subscribeCallString.length
      },
      parseChunk,
      callback
    );

    const self = this;
    function parseChunk(res, body) {
      const lines = body.split("\n");
      let bytesCount = parseInt(lines.shift(), 10);

      // Terrible parser alert
      while (true) {
        const line = lines.shift();
        const data = JSON.parse(line.substring(0, bytesCount));
        bytesCount = parseInt(line.substring(bytesCount), 10);

        // Do not handle events, just log them
        log("Received", JSON.stringify(data));

        const parsedEvent = new Event(data).toJSON();
        log(`Received event ${JSON.stringify(parsedEvent)}`);

        switch (parsedEvent.type) {
          case Event.Type.SUBSCRIBED:
            log("Subscribed");
            self.frameworkInfo.id = parsedEvent.subscribed.framework_id;
            self.mesosStreamId = <string>res.headers["mesos-stream-id"];
            writeFileSync(
              self.options.frameworkInfoFile,
              JSON.stringify(self.frameworkInfo),
              {
                mode: 0o644
              }
            );
            self.reconcile(callback);
            break;
          case Event.Type.HEARTBEAT:
            log("PING");
            break;
          case Event.Type.OFFERS:
            log(
              `Handle offers returns: ${self.handleOffers(
                parsedEvent.offers,
                callback
              )}`
            );
            break;
          case Event.Type.UPDATE:
            log(
              `Handle update returns: ${self.handleUpdate(
                parsedEvent.update,
                callback
              )}`
            );
            break;
        }
        if (isNaN(bytesCount) || bytesCount === 0) {
          break;
        }
      }
    }
  }

  reconcile(callback) {
    readFile(this.options.stateFile, (err, buf) => {
      if (!err) {
        try {
          this.tasksState = JSON.parse(buf.toString());
        } catch (e) {
          console.error(`Problem parsing JSON from ${this.options.stateFile}`);
        }
      }

      const oldTasks: mesos.scheduler.Call.Reconcile.Task[] = [];
      let maxId = 0;

      Object.keys(this.tasksState).forEach(k => {
        const t: mesos.ITaskStatus = this.tasksState[k];
        oldTasks.push(
          new Call.Reconcile.Task({
            task_id: t.task_id,
            agent_id: t.agent_id
          })
        );
        const numericId = parseInt(t.task_id.value, 10);
        if (numericId > maxId) {
          maxId = numericId;
        }
      });

      this.taskId = maxId;
      this.call(
        new Call({
          type: Call.Type.RECONCILE,
          reconcile: new Call.Reconcile({
            tasks: oldTasks
          })
        }),
        callback
      );
    });
  }

  handleUpdate(update: mesos.scheduler.Event.IUpdate, callback) {
    this.tasksState[update.status.task_id.value] = update.status;
    const stateJSON = JSON.stringify(this.tasksState);
    writeFile(
      this.options.stateFile,
      stateJSON,
      {
        mode: 0o644
      },
      () => {
        this.call(
          new mesos.scheduler.Call({
            type: mesos.scheduler.Call.Type.ACKNOWLEDGE,
            acknowledge: new mesos.scheduler.Call.Acknowledge({
              agent_id: update.status.agent_id,
              task_id: update.status.task_id,
              uuid: update.status.uuid
            })
          }),
          callback
        );
      }
    );
  }

  handleOffers(offers: mesos.scheduler.Event.IOffers, callback): void {
    const offerIds = offers.offers.map(o => o.id);
    if (this.commandQueue.length > 0) {
      const cmd = this.commandQueue.shift();
      const firstOffer = offers.offers[0];
      const newTaskId = this.taskId + 1;

      const taskInfo = new mesos.TaskInfo({
        name: cmd,
        task_id: new mesos.TaskID({
          value: newTaskId.toString()
        }),
        agent_id: firstOffer.agent_id,
        resources: this.defaultResources(),
        command: new mesos.CommandInfo({
          shell: true,
          value: cmd
        })
      });

      const Operation = mesos.Offer.Operation;
      const acceptCall = new Call({
        type: Call.Type.ACCEPT,
        accept: new Call.Accept({
          offer_ids: offerIds,
          operations: [
            new Operation({
              type: Operation.Type.LAUNCH,
              launch: new Operation.Launch({ task_infos: [taskInfo] })
            })
          ]
        })
      });

      return this.call(acceptCall, callback);
    } else {
      return this.call(
        new Call({
          type: Call.Type.DECLINE,
          decline: new Call.Decline({ offer_ids: offerIds })
        }),
        callback
      );
    }
  }

  private mesosRequest(
    message: mesos.scheduler.Call,
    headers,
    onData: (res, body) => void,
    callback
  ) {
    message.framework_id = this.frameworkInfo.id;

    const options = {
      hostname: this.options.hostname,
      port: 5050,
      path: ENDPOINT_PATH,
      method: "POST",
      headers: { ...headers }
    };

    const req = request(options, res => {
      log(`STATUS: ${res.statusCode}`);
      log(`HEADERS: ${JSON.stringify(res.headers)}`);
      res.setEncoding("utf8");
      res.on("data", onData.bind(this, res));
      res.on("end", () => {
        log("No more data in response.");
      });
    });
    req.write(JSON.stringify(message.toJSON()));
    req.end(callback);
  }

  call(message: mesos.scheduler.Call, callback) {
    this.mesosRequest(
      message,
      {
        "Content-Type": "application/json",
        "Mesos-Stream-Id": this.mesosStreamId
      },
      (res, body) => {
        if (res.statusCode !== 202) {
          return log(`Error ${res.statusCode}\n${body}`);
        }
      },
      callback
    );
  }

  defaultResources(): mesos.Resource[] {
    const CPU = "cpus";
    const MEM = "mem";
    const cpu = 0.1;

    return [
      new mesos.Resource({
        name: "cpus",
        type: mesos.Value.Type.SCALAR,
        scalar: new mesos.Value.Scalar({ value: cpu })
      }),
      new mesos.Resource({
        name: "mem",
        type: mesos.Value.Type.SCALAR,
        scalar: new mesos.Value.Scalar({ value: cpu })
      })
    ];
  }

  startServer() {
    const server = (this.server = express());

    server.use(bodyParser.urlencoded({ extended: false }));

    server.post("/", (req, res) => {
      const cmd = req.body.cmd;
      this.commandQueue.push(cmd);
      res.status(202).send(`Scheduled: ${cmd}`); // Status Accepted
    });

    server.delete("/", (req, res) => {
      const id = req.body.id;
      this.kill(id, err => {
        if (err) {
          res.send(err);
        } else {
          log(`KILLED ${id}`);
        }
      });
    });

    server.get("/", (req, res) => {
      res.json(this.tasksState);
    });

    server.listen(this.options.port, err => {
      if (err) {
        throw err;
      }

      log(`Server started on port ${this.options.port}`);
    });
  }
}

const simpleScheduler = new SimpleScheduler();
