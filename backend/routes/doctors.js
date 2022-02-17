//====================================================//Require

const express = require("express");


//====================================================// DOCTORS CONTROLLER

const {
  createNewDoctor,
  getDoctorById,
  getAllDoctors,
  updateDoctorById,
  deleteDoctorById,
  getDoctorByName,
  getDoctorByDepartment,
  DoctorProfileImageByID,
  getAllDoctorsInAdmin,
} = require("../controllers/Doctors");

//====================================================// DOCTORAPPOINTMENT CONTROLLER

const {
  setDoctorAppointement,
  setAppointmentIsBooking,
  setIsDeletedInAppointmentAvailable,
  getAppointmentByDoctorId,
  getAvalibleAppointment,
  getDoctorAppointmentByPatientId,
  doctorDeleteAppointment,
  doctorDeleteBooking,
} = require("../controllers/DoctorAppointment");

//====================================================// ENDPOINTS

const { authentication } = require("../middleware/authentication");

//====================================================//  Router

const doctorRouter = express.Router();

//====================================================// ENDPOINTS

doctorRouter.post("/", createNewDoctor);
doctorRouter.get("/", getAllDoctors);
doctorRouter.get("/all", getAllDoctorsInAdmin);
doctorRouter.put("/update", authentication, updateDoctorById);
doctorRouter.delete("/:id", deleteDoctorById);
doctorRouter.post("/Search", getDoctorByName);
doctorRouter.get("/:id", getDoctorById);
doctorRouter.post("/department", getDoctorByDepartment);
doctorRouter.post("/setappointement", setDoctorAppointement);
doctorRouter.post("/profileimage", authentication, DoctorProfileImageByID);

//====================================================// ENDPOINTS

doctorRouter.post("/setappointement", setDoctorAppointement);
doctorRouter.post(
  "/booking",
  setAppointmentIsBooking,
  setIsDeletedInAppointmentAvailable
);
doctorRouter.post("/getappointement", getAppointmentByDoctorId);
doctorRouter.post("/appointement", getAvalibleAppointment);
doctorRouter.post("/getappointementpatient", getDoctorAppointmentByPatientId);
doctorRouter.post(
  "/deletebooking",
  doctorDeleteAppointment,
  doctorDeleteBooking
);
doctorRouter.post(
  "/deletebooking",
  doctorDeleteAppointment,
  doctorDeleteBooking
);

//====================================================// module.exports

module.exports = doctorRouter;
