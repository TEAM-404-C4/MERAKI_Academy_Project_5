const express = require("express");

// Import Paitient controllers
const { createNewPatient } = require("../controllers/Patients");

// Create Paitient router
const PaitientRouter = express.Router();

PaitientRouter.get("/", (req, res) => {
  res.json("PaitientRouter");
});

PaitientRouter.post("/create", createNewPatient);
module.exports = PaitientRouter;
