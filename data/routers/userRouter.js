const express = require("express");
const router = express.Router();
const server = express();

server.use(express.json());

module.exports = router;