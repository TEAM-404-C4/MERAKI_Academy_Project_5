const express = require("express");

// Import doctors controllers
const {
  createNewDoctor,
  getDoctorById,
  getAllDoctors,
  updateDoctorById,
  deleteDoctorById,
  getDoctorByName,
  getDoctorByDepartment,
} = require("../controllers/Doctors");
const { authentication } = require("../middleware/authentication");

// Create doctor router
const doctorRouter = express.Router();

doctorRouter.post("/", createNewDoctor);
doctorRouter.get("/", getAllDoctors);
doctorRouter.put("/:id", updateDoctorById);
doctorRouter.delete("/:id", deleteDoctorById);
doctorRouter.get("/Search", getDoctorByName);
doctorRouter.get("/:id", getDoctorById);
doctorRouter.get("/department", getDoctorByDepartment);

module.exports = doctorRouter;
