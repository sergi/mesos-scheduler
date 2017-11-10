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
  port: 9090,
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
    this.options = { ...defaultOptions, ...options };
    this.setFrameworkInfo(this.options, () => {
      this.subscribe();
      this.startServer();
    });
  }

  setFrameworkInfo(opts, callback) {
    readFile(opts.frameworkInfoFile, (err, buf) => {
      if (err) {
        this.frameworkInfo = new mesos.FrameworkInfo({
          user: opts.user,
          name: opts.name,
          failover_timeout: opts.failover_timeout,
          checkpoint: opts.checkpoint,
          hostname: opts.hostname,
          webui_url: opts.webui_url
        });
      } else {
        this.frameworkInfo = new mesos.FrameworkInfo(
          JSON.parse(buf.toString())
        );
      }
      callback();
    });
  }

  kill(id, cb) {
    if (!this.tasksState[id]) {
      return cb(new Error(`Unknown task ${id}`));
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

    return this.call(killCall);
  }

  subscribe() {
    const subscribeCall = new Call({
      framework_id: this.frameworkInfo.id,
      type: Call.Type.SUBSCRIBE,
      subscribe: new Call.Subscribe({
        framework_info: this.frameworkInfo
      })
    });
    const subscribeCallString = JSON.stringify(subscribeCall.toJSON());
    const options = {
      hostname: this.options.hostname,
      port: 5050,
      path: ENDPOINT_PATH,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": subscribeCallString.length
      }
    };

    const req = request(options, res => {
      log(`STATUS: ${res.statusCode}`);
      log(`HEADERS: ${JSON.stringify(res.headers)}`);

      res.setEncoding("utf8");
      res.on("data", parseChunk);
      res.on("end", () => {
        log("No more data in response.");
      });

      const self = this;
      function parseChunk(body) {
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
              self.reconcile();
              break;
            case Event.Type.HEARTBEAT:
              log("PING");
              break;
            case Event.Type.OFFERS:
              log(
                `Handle offers returns: ${self.handleOffers(
                  parsedEvent.offers
                )}`
              );
              break;
            case Event.Type.UPDATE:
              log(
                `Handle update returns: ${self.handleUpdate(
                  parsedEvent.update
                )}`
              );
              break;
          }
          if (isNaN(bytesCount) || bytesCount === 0) {
            break;
          }
        }
      }
    });
    req.write(subscribeCallString);
    req.end();
  }

  reconcile() {
    readFile(this.options.stateFile, (err, buf) => {
      if (!err) {
        this.tasksState = JSON.parse(buf.toString());
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
        })
      );
    });
  }

  handleUpdate(update: mesos.scheduler.Event.IUpdate) {
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
          })
        );
      }
    );
  }

  handleOffers(offers: mesos.scheduler.Event.IOffers) {
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

      return this.call(acceptCall);
    } else {
      return this.call(
        new Call({
          type: Call.Type.DECLINE,
          decline: new Call.Decline({ offer_ids: offerIds })
        })
      );
    }
  }

  call(message: mesos.scheduler.Call) {
    message.framework_id = this.frameworkInfo.id;

    const options = {
      hostname: this.options.hostname,
      port: 5050,
      path: ENDPOINT_PATH,
      method: "POST",
      headers: {
        "Mesos-Stream-Id": this.mesosStreamId,
        "Content-Type": "application/json"
      }
    };

    const req = request(options, res => {
      log(`STATUS: ${res.statusCode}`);
      log(`HEADERS: ${JSON.stringify(res.headers)}`);
      res.setEncoding("utf8");
      res.on("data", body => {
        if (res.statusCode !== 202) {
          return log(`Error ${res.statusCode}\n${body}`);
        }
      });
      res.on("end", () => {
        log("No more data in response.");
      });
    });

    req.write(JSON.stringify(message.toJSON()));
    req.end();
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