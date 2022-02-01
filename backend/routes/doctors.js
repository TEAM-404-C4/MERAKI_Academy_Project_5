const express = require("express");

const doctorRouter = express.Router();

doctorRouter.get("/", (req, res) => {
  res.json("doctorRouter");
});

doctorRouter.post("/create", (req, res) => {
  res.json("create doctors");
});
module.exports = doctorRouter;
