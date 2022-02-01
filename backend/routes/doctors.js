const express = require("express");

const doctorRouter = express.Router();

doctorRouter.get("/", (req, res) => {
  res.json("doctorRouter");
});

module.exports = doctorRouter;
