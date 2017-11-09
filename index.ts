import { hostname, tmpdir } from "os";
import { mesos } from "./proto/messages";
import { readFile, writeFile, writeFileSync } from "fs";
import { join } from "path";
import { request } from "http";

import * as debug from "debug";
import * as express from "express";
import * as bodyParser from "body-parser";

const log = debug("SimpleScheduler:log");
// Files
const stateFile = join(tmpdir(), "state.json");
const frameworkInfoFile = join(tmpdir(), "framework.json");

const Call = mesos.scheduler.Call;
const PORT = 9090;

// Url to Mesos master scheduler API
const SCHEDULER_API_URL = "http://AFSTP.local:5050/api/v1/scheduler";
// Current framework configuration
let frameworkInfo: mesos.FrameworkInfo;
let mesosStreamID: string;

let taskID: number;

const commandQueue: string[] = [];

let tasksState: { [key: string]: mesos.ITaskStatus } = {};

(function() {
  const user = "root";
  const name = "simple_framework";
  const host = hostname();

  const listen = `:${PORT}`;
  const webuiUrl = `http://${host}${listen}`;
  const failoverTimeout = 3600;
  const checkpoint = true;

  readFile(frameworkInfoFile, (err, buf) => {
    if (err) {
      frameworkInfo = new mesos.FrameworkInfo({
        user,
        name,
        failover_timeout: failoverTimeout,
        checkpoint,
        hostname: host,
        webui_url: webuiUrl
      });
    } else {
      frameworkInfo = new mesos.FrameworkInfo(JSON.parse(buf.toString()));
    }
    log("Asd")
    subscribe();
  });
})();

function kill(id, cb) {
  if (!tasksState[id]) {
    return cb(new Error(`Unknown task ${id}`));
  }

  const update = tasksState[id];
  console.log(`Kill task ${id} [${update}]"`);

  const killCall = new Call({
    type: Call.Type.KILL,
    kill: new Call.Kill({
      task_id: update.task_id,
      agent_id: update.agent_id
    })
  });

  return call(killCall);
}

function subscribe() {
  const subscribeCall = new Call({
    framework_id: frameworkInfo.id,
    type: Call.Type.SUBSCRIBE,
    subscribe: new Call.Subscribe({
      framework_info: frameworkInfo
    })
  });
  const subscribeCallString = JSON.stringify(
    subscribeCall.toJSON(),
    undefined,
    2
  );
  const options = {
    hostname: "localhost",
    port: 5050,
    path: "/api/v1/scheduler",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": subscribeCallString.length
    }
  };
  const Event = mesos.scheduler.Event;
  const req = request(options, res => {
    log(`STATUS: ${res.statusCode}`);
    log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding("utf8");
    res.on("data", parseChunk);
    res.on("end", () => {
      log("No more data in response.");
    });
    function parseChunk(body) {
      const lines = body.split("\n");
      let bytesCount = parseInt(lines.shift(), 10);

      while (true) {
        const line = lines.shift();
        const data = line.substring(0, bytesCount);

        bytesCount = parseInt(line.substring(bytesCount), 10);
        // Do not handle events, just log them
        log("Received", JSON.stringify(JSON.parse(data)));

        const event = new Event(JSON.parse(data));
        const parsedEvent = event.toJSON();

        log(`Received event ${JSON.stringify(parsedEvent)}`);

        switch (parsedEvent.type) {
          case Event.Type.SUBSCRIBED:
            log("Subscribed");
            frameworkInfo.id = parsedEvent.subscribed.framework_id;
            mesosStreamID = <string>res.headers["mesos-stream-id"];
            writeFileSync(frameworkInfoFile, JSON.stringify(frameworkInfo), {
              mode: 0o644
            });
            reconcile();
            break;
          case Event.Type.HEARTBEAT:
            log("PING");
            break;
          case Event.Type.OFFERS:
            log(`Handle offers returns: ${handleOffers(parsedEvent.offers)}`);
            break;
          case Event.Type.UPDATE:
            log(`Handle update returns: ${handleUpdate(parsedEvent.update)}`);
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

function reconcile() {
  readFile(stateFile, (err, buf) => {
    if (!err) {
      tasksState = JSON.parse(buf.toString());
    }

    const oldTasks: mesos.scheduler.Call.Reconcile.Task[] = [];
    let maxId = 0;

    Object.keys(tasksState).forEach(k => {
      const t: mesos.ITaskStatus = tasksState[k];
      oldTasks.push(
        new mesos.scheduler.Call.Reconcile.Task({
          task_id: t.task_id,
          agent_id: t.agent_id
        })
      );
      const numericId = parseInt(t.task_id.value, 10);
      if (numericId > maxId) {
        maxId = numericId;
      }
    });
    taskID = maxId;
    call(
      new mesos.scheduler.Call({
        type: mesos.scheduler.Call.Type.RECONCILE,
        reconcile: new mesos.scheduler.Call.Reconcile({
          tasks: oldTasks
        })
      })
    );
  });
}

function handleUpdate(update: mesos.scheduler.Event.IUpdate) {
  tasksState[update.status.task_id.value] = update.status;
  const stateJSON = JSON.stringify(tasksState);
  writeFile(
    stateFile,
    stateJSON,
    {
      mode: 0o644
    },
    () => {
      call(
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

function handleOffers(offers: mesos.scheduler.Event.IOffers) {
  const offerIds = offers.offers.map(o => o.id);
  if (commandQueue.length > 0) {
    const cmd = commandQueue.shift();
    const firstOffer = offers.offers[0];
    const newTaskId = taskID + 1;

    const taskInfo = new mesos.TaskInfo({
      name: cmd,
      task_id: new mesos.TaskID({
        value: newTaskId.toString()
      }),
      agent_id: firstOffer.agent_id,
      resources: defaultResources(),
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

    return call(acceptCall);
  } else {
    return call(
      new Call({
        type: Call.Type.DECLINE,
        decline: new Call.Decline({ offer_ids: offerIds })
      })
    );
  }
}

function call(message: mesos.scheduler.Call) {
  message.framework_id = frameworkInfo.id;

  const options = {
    hostname: "localhost",
    port: 5050,
    path: "/api/v1/scheduler",
    method: "POST",
    headers: {
      "Mesos-Stream-Id": mesosStreamID,
      "Content-Type": "application/json"
    }
  };

  const req = request(options, res => {
    log(`STATUS: ${res.statusCode}`);
    log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding("utf8");
    res.on("data", body => {
      if (res.statusCode !== 202) {
        console.error(body);
        return log(`Error ${res.statusCode}`);
      }
    });
    res.on("end", () => {
      log("No more data in response.");
    });
  });

  req.write(JSON.stringify(message.toJSON()));
  req.end();
}

function defaultResources(): mesos.Resource[] {
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

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", function(req, res) {
  const cmd = req.body.cmd;
  commandQueue.push(cmd);
  res.status(202).send(`Scheduled: ${cmd}`); // Status Accepted
});

app.delete("/", function(req, res) {
  const id = req.body.id;
  kill(id, err => {
    if (err) {
      res.send(err);
    } else {
      log(`KILLED ${id}`);
    }
  });
});

app.get("/", (req, res) => {
  res.set("Content-Type", "application/json");
  res.json(tasksState);
});

app.listen(PORT, function(err) {
  if (err) {
    throw err;
  }

  log(`Server started on port ${PORT}`);
});
