const express = require("express");




registerRouter.get("/", (req, res) => {
  res.json("registerRouter");
});

module.exports = registerRouter;
