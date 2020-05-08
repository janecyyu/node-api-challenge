const express = require("express");
const router = express.Router({ mergeParams: true });
const server = express();
const projectModel = require("../helpers/projectModel");

server.use(express.json());

router.get("/:id", (req, res) => {
  projectModel
    .get(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).jeson({ error: err });
    });
});

router.post("/", (req, res) => {
  projectModel
    .insert(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete('/:id', (req, res) => {
    projectModel
    .remove(req.params.id)
    .then((remove) => {
      res.status(200).json(remove);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.put("/:id", (req, res) => {
    projectModel
      .update(req.params.id, req.body)
      .then((update) => {
        res.status(200).json(update);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });

module.exports = router;
