const express = require("express");

// Import Paitient controllers
const { reateNewPatient } = require("../controllers/Patients");

// Create Paitient router
const PaitientRouter = express.Router();

PaitientRouter.get("/", (req, res) => {
  res.json("PaitientRouter");
});

PaitientRouter.post("/create", (req, res) => {
  res.json("create patient");
});
module.exports = PaitientRouter;
