const express = require("express");

// Import Paitient controllers
const {
  createNewPatient,
  getAllPatients,
  getPatientByPhone,
  deletePatientById,
  updatePatientByid,
} = require("../controllers/Patients");
const { authentication } = require("../middleware/authentication");

// Create Paitient router
const PaitientRouter = express.Router();

PaitientRouter.get("/all", authentication, getAllPatients);

PaitientRouter.post("/create", createNewPatient);
PaitientRouter.put("/:id", updatePatientByid);

PaitientRouter.get("/phone", getPatientByPhone);

PaitientRouter.delete("/:id", deletePatientById);

module.exports = PaitientRouter;
