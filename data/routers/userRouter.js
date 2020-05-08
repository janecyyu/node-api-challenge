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

router.post("/", (req, res) => {
  action
    .insert(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.put("/:id", (req, res) => {
  action
    .update(req.params.id, req.body)
    .then((update) => {
      res.status(200).json(update);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/:id", (req, res) => {
  action
    .remove(req.params.id)
    .then((remove) => {
      res.status(200).json(remove);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
