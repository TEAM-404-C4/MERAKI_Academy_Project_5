const connection = require("../database/db");
const bcrypt = require("bcrypt");

//This function creates a new Patient (new user)
const createNewPatient = async (req, res) => {
  console.log("its run");
  let { firstName, lastName, password, phone, roleId } = req.body;
  const query = `INSERT INTO patient (firstName,lastName, password,phone,roleId) VALUES (?,?,?,?,?)`;
  password = await bcrypt.hash(password, 10);
  const data = [firstName, lastName, password, phone, roleId];
  connection.query(query, data, (err, result) => {
    console.log("err", err);
    if (!err) {
      res.status(200).json({
        success: true,
        message: "Success patient Added",
        result: result,
      });
    } else {
      res.status(409).json({
        success: false,
        message: " This account already exists",
      });
    }
  });
};

//This function get All  Patients

const getAllPatients = (req, res) => {
  const query = `SELECT* FROM patient`;
  connection.query(query, (err, result) => {
    if (result.length) {
      res.status(200).json({
        success: true,
        message: `All the patients`,
        patients: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: `No patients Yet`,
      });
    }
  });
};

//Delete Patient by id
const getPatientById = (req, res) => {
  let id = req.params.id;
  const query = `SELECT firstName,lastName,phone FROM patient WHERE id=?`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (result.length) {
      res.status(200).json({
        success: true,
        message: `The patient => ${id} `,
        patient: result,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: `The patient not found`,
      });
    }
  });
};

module.exports = {
  createNewPatient,
  getAllPatients,
  getPatientById,
};
