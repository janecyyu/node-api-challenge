const express = require("express");
const server = express();
const userRouter = require("./data/routers/userRouter");
// const cors = require('cors')

server.use(express.json());
server.use("/users", userRouter);
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
