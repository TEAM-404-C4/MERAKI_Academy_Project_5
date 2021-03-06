//====================================================//Require
const express = require("express");

//====================================================//Import Paitient Controllers
const {
  createNewPatient,
  getAllPatients,
  getPatientById,
  getPatientByPhone,
  deletePatientById,
  updatePatientByid,
  checkPatientExist,
  loginGoogle,
  loginFacebook,
} = require("../controllers/Patients");
const { authentication } = require("../middleware/authentication");

//====================================================//Import Setting Controllers

const {
  ChangePatientPasswordById,
  ChangePatientPhoneById,
} = require("../controllers/Setting");

//====================================================//Create Paitient Router
const PaitientRouter = express.Router();

//====================================================// ENDPOINTS

PaitientRouter.get("/all", getAllPatients);
PaitientRouter.get("/:id", getPatientById);
PaitientRouter.post("/create", createNewPatient);
PaitientRouter.put("/update", authentication, updatePatientByid);
PaitientRouter.get("/phone", getPatientByPhone);
PaitientRouter.delete("/:id", deletePatientById);
PaitientRouter.put(
  "/changepassword",
  authentication,
  ChangePatientPasswordById
);
PaitientRouter.put("/changephone/", authentication, ChangePatientPhoneById);
PaitientRouter.post("/googlelogin", checkPatientExist, loginGoogle);
PaitientRouter.post("/facebooklogin", checkPatientExist, loginFacebook);

//====================================================// module.exports

module.exports = PaitientRouter;
