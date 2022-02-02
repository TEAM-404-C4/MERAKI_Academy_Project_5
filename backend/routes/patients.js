const express = require("express");

// Import Paitient controllers
const { createNewPatient, getAllPatients } = require("../controllers/Patients");

// Create Paitient router
const PaitientRouter = express.Router();

PaitientRouter.get("/all", getAllPatients);

PaitientRouter.post("/create", createNewPatient);
module.exports = PaitientRouter;
