//====================================================//Require
const connection = require("../database/db");

const CreateNewAppointment = (req, res) => {
  const query = `Insert INTO Appointment (time) VALUES (?) `;
  const data = [req.body.time];
  connection.query(query, data, (err, result) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, message: "Server Error", error: err });
    }
    res.status(201).json({ success: true, message:'Successful Add New Time Appointment'});
  });
};
const getAllAppointment = (req, res) => {
    const query = `Select * from Appointment  `;
    connection.query(query, (err, result) => {
        if (err) {
          res
            .status(500)
            .json({ success: false, message: "Server Error", error: err });
        }
        res.status(200).json({ success: true, message:'All Appointment ',result: result });
      });
};
const deleteAppointmentById = (req, res) => {
    const query=`UPDATE Appointment SET is_deleted=1 WHERE id=?`
    const data=[req.params.id,]
    connection.query(query, data, (err, result) => {
        if (err) {
          res
            .status(500)
            .json({ success: false, message: "Server Error", error: err });
        }
        res.status(201).json({ success: true, message:'Successful Deleted Appointment'});
      });
};
const updateAppointmentById = (req, res) => {
    const query=`UPDATE Appointment SET time = ? WHERE id=?`;
    const {time}=req.body;
    const data=[time,req.params.id,]
    connection.query(query, data, (err, result) => {
        if (err) {
          res
            .status(500)
            .json({ success: false, message: "Server Error", error: err });
        }
        res.status(201).json({ success: true, message:'Successful Updated Appointment'});
      });
};
module.exports = {
  CreateNewAppointment,
  getAllAppointment,
  getAppointmentByTime,
  deleteAppointmentById,
  updateAppointmentById,
};
