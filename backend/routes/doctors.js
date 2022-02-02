const express = require("express");

// Import doctors controllers
const {
  createNewDoctor,
  getAllDoctors,
  updateDoctorById,
  deleteDoctorById,
} = require("../controllers/Doctors");
const { authentication } = require("../middleware/authentication");

// Create doctor router
const doctorRouter = express.Router();

doctorRouter.post("/", createNewDoctor);
doctorRouter.get("/", authentication, getAllDoctors);
doctorRouter.put("/:id", updateDoctorById);
doctorRouter.delete("/:id", deleteDoctorById);

module.exports = doctorRouter;
