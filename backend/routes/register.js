const express = require("express");

const registerRouter = express.Router();

registerRouter.get("/", (req, res) => {
  res.json("registerRouter");
});

module.exports = registerRouter;
