const express = require("express");

const PaitientRouter = express.Router();

PaitientRouter.get("/", (req, res) => {
  res.json("PaitientRouter");
});

PaitientRouter.post("/create", (req, res) => {
  res.json("create patient");
});
module.exports = PaitientRouter;
