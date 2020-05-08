const express = require("express");
const server = express();
const actionRouter = require("./data/routers/userRouter");
const projectRouter = require("./data/routers/projectRouter")
// const cors = require('cors')

server.use(express.json());
server.use("/projects/:id/actions", actionRouter);
server.use("/projects", projectRouter);
// server.use(cors());
// server.use(logger);
server.get("/", (req, res) => {
  res.status(200).json({ welcome: "friends" });
});

//custom middleware

// function logger(req, res, next) {
//   console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);

//   next();
// }

module.exports = server;
