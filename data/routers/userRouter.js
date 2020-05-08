const express = require("express");
const router = express.Router();
const server = express();
const action = require("../helpers/actionModel");

server.use(express.json());

router.get("/", (req, res) => {
  res.status(200).json({ Hi: "hi there!" });
});

router.get("/:id", (req, res) => {
  action
    .get(req.params.id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
