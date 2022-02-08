//====================================================//Require
const express = require("express");

//====================================================//Import Paitient Controllers
const {
  createNewPatient,
  getAllPatients,
  getPatientByPhone,
  deletePatientById,
  updatePatientByid,
} = require("../controllers/Patients");
const { authentication } = require("../middleware/authentication");

const {
  ChangePatientPasswordById,
  ChangePatientPhoneById,
} = require("../controllers/Setting");

//====================================================//Create Paitient Router
const PaitientRouter = express.Router();

PaitientRouter.get("/all", authentication, getAllPatients);
PaitientRouter.post("/create", createNewPatient);
PaitientRouter.put("/update/:id", updatePatientByid);
PaitientRouter.get("/phone", getPatientByPhone);
PaitientRouter.delete("/:id", deletePatientById);
PaitientRouter.put(
  "/changepassword",
  authentication,
  ChangePatientPasswordById
);
PaitientRouter.put("/changephone/:id", ChangePatientPhoneById);

module.exports = PaitientRouter;
