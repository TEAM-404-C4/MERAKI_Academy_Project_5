const express = require("express");

// Import Paitient controllers
const {
  createNewPatient,
  getAllPatients,
  getPatientById,
  deletePatientById,
} = require("../controllers/Patients");
const { authentication } = require("../middleware/authentication");

// Create Paitient router
const PaitientRouter = express.Router();

PaitientRouter.get("/all", authentication,getAllPatients);

PaitientRouter.post("/create", createNewPatient);

PaitientRouter.get("/Search_1/:id", getPatientById);

PaitientRouter.delete("/:id", deletePatientById);

module.exports = PaitientRouter;
