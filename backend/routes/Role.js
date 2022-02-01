const express = require("express");

const RoleRouter = express.Router();

RoleRouter.get("/", (req, res) => {
  res.json("RoleRouter");
});

module.exports = RoleRouter;
