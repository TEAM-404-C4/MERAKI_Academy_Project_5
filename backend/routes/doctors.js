const express = require("express");

// Import doctors controllers
const { createNewDoctor } = require("../controllers/Doctors");

// Create doctor router
const doctorRouter = express.Router();

doctorRouter.get("/", (req, res) => {
  res.json("doctorRouter");
});

doctorRouter.post("/create", (req, res) => {
  res.json("create doctors");
});
module.exports = doctorRouter;
