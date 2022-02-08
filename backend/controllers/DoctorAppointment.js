//====================================================//Require
const connection = require("../database/db");

// =========================================================

const setDoctorAppointement = (req, res) => {
  const doctor_appointment = req.body.doctor_appointment;
  const doctorId = req.body.doctorId;
  console.log(req.body);
  const query = `INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES (?,?)`;
  let data = [];
  doctor_appointment.forEach((element) => {
    data = [Number(element), doctorId];
    connection.query(query, data, (err, result) => {
      if (err) {
        return res.json(err);
      }
    });
  });

  return res.json({
    success: true,
  });
};
// in Doctor Panel
const CreateNewDoctorAppointment = (req, res) => {
  //  const {doctorId, appointmentId, patientId}
  //   const query=` Insert into Doctor_Appointment (doctorId, appointmentId, patientId) VALUES (?,?,?)`;
  //   const data=[doctorId, appointmentId, patientId];
  //   connection.query(query, data, (err, result) => {
  //       if (err) {
  //         res
  //           .status(500)
  //           .json({ success: false, message: "Server Error", error: err });
  //       }
  //       res.status(201).json({ success: true, message:`Successful Add New  Appointment in Doctor => ${doctorId}` });
  //     });
};
// Doctor Retrieve Information Patients  for All Appointments.
const getDoctorAppointmentByDoctorId = (req, res) => {
  const query = `SELECT healthcare.patient.firstName,healthcare.patient.lastName,healthcare.patient.phone FROM healthcare.doctor_appointment JOIN healthcare.patient on healthcare.doctor_appointment.patientId=healthcare.patient.id where healthcare.doctor_appointment.doctorId = ?`;
  const data = [req.params.doctorId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, message: "Server Error", error: err });
    }
    res.status(200).json({
      success: true,
      message: `Retrieve All Appointment for Doctor =>${data[0]}`,
    });
  });
};
// Patient Retrieve Information Doctors for All Appointments.

const getDoctorAppointmentByPatientId = (req, res) => {
  const query = `SELECT healthcare.doctor.fullName,healthcare.doctor.email,healthcare.doctor.phone,healthcare.doctor.address FROM healthcare.doctor_appointment JOIN healthcare.doctor on healthcare.doctor_appointment.doctorId=healthcare.doctor.id where healthcare.doctor_appointment.patientId = ?`;
  const data = [req.params.patientId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, message: "Server Error", error: err });
    }
    res.status(200).json({
      success: true,
      message: `Retrieve All Appointment for Patient =>${data[0]}`,
    });
  });
};
const deleteDoctorAppointmentByDoctorId = (req, res) => {};
const deleteDoctorAppointmentByPatientId = (req, res) => {};

module.exports = { setDoctorAppointement };
