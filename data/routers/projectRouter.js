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

module.exports = router;
