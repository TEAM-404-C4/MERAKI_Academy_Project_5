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

module.exports = {
  createNewPatient,
  getAllPatients,
};
