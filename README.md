## Simple Node.js Mesos Scheduler

This is a basic Apache Mesos Scheduler for node written from scratch. Inspired by https://github.com/janisz/simple-scheduler.

![](https://media.giphy.com/media/DU6kwIChUGYmI/giphy.gif)

### Install it

```
   > npm install
```

### Run it

```
   > npm run build-ts
   > node dist/index.js
```

### Use it!

The scheduler itself exposes an HTTP API with GET, POST, and DELETE to manage tasks, by default on port `9090`. Check out the source to see how to use them. Documentation is very much Work In Progress.

In the future I'll include a Dockerfile to bring up a whole Mesos environment to play with.

Cheers to @zmalik for discovering janisz/simple-scheduler to me!
