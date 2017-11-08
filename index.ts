import { hostname, tmpdir } from "os";
import { mesos } from "./proto/messages";
import * as fs from "fs";
import * as http from "http";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as request from "request";

const util = require("util");
const path = require("path");

// Files
const stateFile = path.join(tmpdir(), "state.json");
const frameworkInfoFile = path.join(tmpdir(), "framework.json");

const Call = mesos.scheduler.Call;
const PORT = 9090;

// Url to Mesos master scheduler API
const schedulerApiUrl = "http://10.10.10.10:5050/api/v1/scheduler";
// Current framework configuration
let frameworkInfo: mesos.FrameworkInfo;
let mesosStreamID: string;

let taskID: number;

const commandQueue: string[] = [];

let tasksStatus: mesos.ITaskStatus;

(function() {
  const user = "root";
  const name = "simple_framework";
  const host = hostname();

  const listen = `:${PORT}`;
  const webuiUrl = `http://${host}${listen}`;
  const failoverTimeout = 3600;
  const checkpoint = true;

  fs.readFile(frameworkInfoFile, (err, buf) => {
    if (err) {
      frameworkInfo = new mesos.FrameworkInfo({
        user,
        name,
        failoverTimeout,
        checkpoint,
        hostname: host,
        webuiUrl
      });
      return;
    }
    frameworkInfo = new mesos.FrameworkInfo(JSON.parse(buf.toString()));
  });
})();

function kill(id, cb) {
  if (!tasksStatus[id]) {
    return cb(new Error(`Unknown task ${id}`));
  }

  const update = tasksStatus[id];
  console.log(`Kill task ${id} [${update}]"`);

  const killCall = new Call({
    type: Call.Type.KILL,
    kill: new Call.Kill({
      taskId: update.taskId,
      agentId: update.agentId
    })
  });

  return call(killCall);
}

function subscribe() {
  const subscribeCall = new Call({
    frameworkId: frameworkInfo.id,
    type: Call.Type.SUBSCRIBE,
    subscribe: new Call.Subscribe({
      frameworkInfo
    })
  });

  const body = JSON.stringify(subscribeCall.toJSON());
  console.log(body);

  const options = {
    url: schedulerApiUrl,
    headers: {
      "Content-Type": "application/json"
    },
    body
  };

  request.post(options, (err, res, body) => {
    if (err || res.statusCode !== 202) {
      console.error(body);
      return console.log(`Error ${res.statusCode}`);
    }

    const lines = body.split("\n");
    let bytesCount = parseInt(lines.shift(), 10);

    while (true) {
      const line = lines.shift();
      const data = line.substring(0, bytesCount);
      bytesCount = line.substring(bytesCount);
      if (bytesCount === 0) {
        continue;
      }

      const Event = mesos.scheduler.Event;
      // Do not handle events, just log them
      console.log(`Got [${data}]`);
      const event = new mesos.scheduler.Event(JSON.parse(data));
      console.log(`Got [${event.toJSON().toString()}]`);

      const EventType = mesos.scheduler.Event.Type;
      switch (event.type) {
        case EventType.SUBSCRIBED:
          console.log("Subscribed");
          frameworkInfo.id = event.subscribed.frameworkId;
          mesosStreamID = <string>res.headers["Mesos-Stream-Id"];
        // ioutil.WriteFile(frameworkInfoFile, []byte(json), 0644)
        // reconcile()
        case EventType.HEARTBEAT:
          console.log("PING");
        case EventType.OFFERS:
          console.log(`Handle offers returns: ${handleOffers(event.offers)}`);
        case EventType.UPDATE:
          console.log(`Handle update returns: ${handleUpdate(event.update)}`);
      }
    }
  });
}

function reconcile() {
  fs.readFile(stateFile, (err, buf) => {
    if (!err) {
      tasksStatus = JSON.parse(buf.toString());
    }

    const oldTasks: mesos.scheduler.Call.Reconcile.Task[] = [];
    let maxId = 0;

    Object.keys(tasksStatus).forEach(k => {
      const t: mesos.ITaskStatus = tasksStatus[k];
      oldTasks.push(
        new mesos.scheduler.Call.Reconcile.Task({
          taskId: t.taskId,
          agentId: t.agentId
        })
      );
      const numericId = parseInt(t.taskId.value, 10);
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
  tasksStatus[update.status.taskId.value] = update.status;
  const stateJSON = JSON.stringify(tasksStatus);
  fs.writeFile(
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
            agentId: update.status.agentId,
            taskId: update.status.taskId,
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
      taskId: new mesos.TaskID({
        value: newTaskId.toString()
      }),
      agentId: firstOffer.agentId,
      resources: defaultResources(),
      command: new mesos.CommandInfo({
        shell: true,
        value: cmd
      })
    });

    const acceptCall = new Call({
      type: Call.Type.ACCEPT,
      accept: new Call.Accept({
        offerIds,
        operations: [
          new mesos.Offer.Operation({
            type: mesos.Offer.Operation.Type.LAUNCH,
            launch: new mesos.Offer.Operation.Launch({ taskInfos: [taskInfo] })
          })
        ]
      })
    });
    return call(acceptCall);
  } else {
    return call(
      new Call({
        type: Call.Type.DECLINE,
        decline: new Call.Decline({ offerIds })
      })
    );
  }
}

function call(message: mesos.scheduler.Call) {
  message.frameworkId = frameworkInfo.id;

  const body = JSON.stringify(message.toJSON());
  const options = {
    url: schedulerApiUrl,
    headers: {
      "Mesos-Stream-Id": mesosStreamID,
      "Content-Type": "application/json"
    },
    body
  };

  request.post(options, (err, res, body) => {
    if (err || res.statusCode !== 202) {
      console.error(body);
      return console.log(`Error ${res.statusCode}`);
    }
  });
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

// Tell express to use the body-parser middleware and to not parse extended bodies
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
      console.log(`KILLED ${id}`);
    }
  });
});

app.get("/", (req, res) => {
  res.set("Content-Type", "application/json");
  res.json(tasksStatus);
});

app.listen(PORT, function(err) {
  if (err) {
    throw err;
  }

  console.log(`Server started on port ${PORT}`);
});
