const express = require("express");

// Import doctors controllers
const { createNewDoctor ,getAllDoctors,updateDoctorById,deleteDoctorById} = require("../controllers/Doctors");

// Create doctor router
const doctorRouter = express.Router();



doctorRouter.post("/", createNewDoctor);
doctorRouter.get("/", getAllDoctors);
doctorRouter.put('/:id',updateDoctorById);
doctorRouter.delete('/:id',deleteDoctorById);

module.exports = doctorRouter;
