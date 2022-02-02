const express = require("express");

// Import Paitient controllers
const {
  createNewPatient,
  getAllPatients,
  getPatientById,
} = require("../controllers/Patients");

// Create Paitient router
const PaitientRouter = express.Router();

PaitientRouter.get("/all", getAllPatients);

PaitientRouter.post("/create", createNewPatient);

PaitientRouter.get("/Search_1/:id", getPatientById);

module.exports = PaitientRouter;
