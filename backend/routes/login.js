const express = require("express");

const loginRouter = express.Router();

loginRouter.get("/", (req, res) => {
  res.json("loginRouter");
});

module.exports = loginRouter;
