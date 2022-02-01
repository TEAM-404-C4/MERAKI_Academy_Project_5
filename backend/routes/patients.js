const express = require("express");

const PaitientRouter = express.Router();

PaitientRouter.get("/", (req, res) => {
  res.json("PaitientRouter");
});

module.exports = PaitientRouter;
