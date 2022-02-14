//====================================================//Require
const connection = require("../database/db");

// =========================================================setDoctorAppointement

const setDoctorAppointement = (req, res) => {
  const doctor_appointment = req.body.doctor_appointment;
  const doctorId = req.body.doctorId;
  const query = `INSERT INTO DoctorShowAppointment (appointmentId,doctorId) VALUES (?,?)`;
  const query1 = `SELECT a.time ,d.appointmentId FROM healthcare.DoctorShowAppointment as d join healthcare.appointment as a on 
  a.id=d.appointmentId where d.doctorId = ?`;
  let data = [];
  let data1 = [req.body.doctorId];

  connection.query(query1, data1, (err, result) => {
    if (err) {
      return res.json(err);
    }
    // console.log(result, data1);
    const find = result.filter((element) => {
      return doctor_appointment.includes(String(element.appointmentId));
    });

    if (find.length == 0) {
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
    } else {
      return res.json({
        success: false,
        message: "check appointement is repeated",
        response: find,
      });
    }
  });
};
// in Doctor Panel
// الدكتور بشوف المرضى
// Doctor Retrieve Information Patients  for All Appointments.
const getAppointmentByDoctorId = (req, res) => {
  const query = `SELECT p.firstName,p.lastName,p.phone,a.time,p.gender,da.dateAppointment, da.appointmentId,da.patientId  FROM healthcare.doctor_appointment da JOIN healthcare.patient p  on da.patientId=p.id JOIN healthcare.appointment a ON da.appointmentId=a.id  where da.doctorId = ? and da.is_Booking=1 `;
  const data = [req.body.doctorId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, message: "Server Error", error: err });
    }
    res.status(200).json({
      success: true,
      message: `Retrieve All Appointment for Doctor =>${data[0]}`,
      result: result,
    });
  });
};
// Patient Retrieve Information Doctors for All Appointments.
// المريض بشوف معلومات الدكتور
const getDoctorAppointmentByPatientId = (req, res) => {
  const query = `SELECT d.fullName as 'Doctor Name ',d.email as 'Doctor Email  ',d.phone as 'Doctor Phone Number ',d.address as 'Doctor Address ', a.time as 'Appointment Time  ' , da.dateAppointment as 'Date Appointment  ' FROM healthcare.doctor_appointment da JOIN healthcare.doctor d on da.doctorId=d.id JOIN healthcare.appointment a on a.id=da.appointmentId where da.patientId = ?`;
  const data = [req.body.patientId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, message: "Server Error", error: err });
    }
    res.status(200).json({
      success: true,
      message: `Retrieve All Appointment for Patient =>${data[0]}`,
      result,
    });
  });
};
// Doctor Available Patient Can Booking
const getAvalibleAppointment = (req, res) => {
  const query = `select a.id,a.time FROM doctorshowappointment d join appointment a on a.id=d.appointmentId
  where doctorId= ? and appointmentId not in 
 (select dd.appointmentId FROM doctor_appointment dd  where dd.dateAppointment = ? and  dd.doctorId = ? );
 
 
 `;

  const { doctorId, dateAppointment } = req.body;

  const data = [doctorId, dateAppointment, doctorId];

  connection.query(query, data, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, message: "Server Error", error: err });
    }

    res.status(200).json({
      success: true,
      message: `All Appointment Available From Doctor =>${req.body.doctorId} `,
      result: result,
    });
  });
};
const setAppointmentIsBooking = (req, res, next) => {
  const query = `INSERT INTO doctor_appointment (doctorId,appointmentId,patientId,is_Booking,dateAppointment) VALUES(?,?,?,?,?)`;

  console.log(req.body);
  const { doctorId, appointmentId, patientId, dateAppointment } = req.body;
  const data = [doctorId, appointmentId, patientId, 1, dateAppointment];
  connection.query(query, data, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, message: "Server Error", error: err });
    }
    next();
  });
};
const setIsDeletedInAppointmentAvailable = (req, res) => {
  const query = `Update healthcare.doctorshowappointment SET is_deleted=1 where appointmentId = ? and doctorId = ?`;
  const { doctorId, appointmentId } = req.body;

  const data = [appointmentId, doctorId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, message: "Server Error", error: err });
    }
    res
      .status(200)
      .json({ success: true, message: `SuccessFully Appointment =>` });
  });

  // =========================================================================== doctor delete appointment
};
const doctorDeleteAppointment = (req, res, next) => {
  const query = `DELETE FROM doctor_appointment  WHERE  doctorId=? AND appointmentId=? AND patientId=? AND dateAppointment=?`;

  console.log(req.body);
  const { doctorId, appointmentId, patientId, dateAppointment } = req.body;
  const data = [doctorId, appointmentId, patientId, dateAppointment];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Server Error", error: err });
    }
    next();
  });
};
const doctorDeleteBooking = (req, res) => {
  const query = `Update healthcare.doctorshowappointment SET is_deleted=0 where appointmentId = ? and doctorId = ?`;
  const { doctorId, appointmentId } = req.body;

  const data = [appointmentId, doctorId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, message: "Server Error", error: err });
    }
    res.status(200).json({
      success: true,
      message: `SuccessFully DELETE BOOKINF Appointment =>`,
    });
  });
};

module.exports = {
  setDoctorAppointement,
  setAppointmentIsBooking,
  setIsDeletedInAppointmentAvailable,
  getAppointmentByDoctorId,
  getAvalibleAppointment,
  getDoctorAppointmentByPatientId,
  doctorDeleteAppointment,
  doctorDeleteBooking,
};
