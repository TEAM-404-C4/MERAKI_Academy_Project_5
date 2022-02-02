const connection = require("../database/db");
const bcrypt = require("bcrypt");

//This function creates a new Patient (new user)
const createNewPatient = async (req, res) => {
  let { firstName, lastName, password, phone, roleId } = req.body;
  const query = `INSERT INTO patient (firstName,lastName, password,phone,roleId) VALUES (?,?,?,?,?)`;
  password = await bcrypt.hash(password, 10);
  const data = [firstName, lastName, password, phone, roleId];
  connection.query(query, data, (err, result) => {
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
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }

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

//get Patient by id
const getPatientByPhone = (req, res) => {
  let phone = req.body.phone;
  const query = `SELECT firstName,lastName,phone FROM patient WHERE phone like ?`;
  const data = [`%${phone}%`];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }

    if (result.length) {
      res.status(200).json({
        success: true,
        message: `The patient => ${phone} `,
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

// update patient

const updatePatientByid = async (req, res) => {
  userId = req.params.id;
  const { firstName, lastName, password, phone } = req.body;

  const query = `UPDATE patient SET firstName=?, lastName=?,password=?,phone=?`;

  try {
    const hashPass = await bcrypt.hash(password, 2);
    const data = [firstName, lastName, hashPass, phone];

    connection.query(query, data, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          massage: "server error",
          err: err,
        });
      }

      if (result.changedRows == 0) {
        return res.status(404).json({
          success: false,
          massage: `The Doctor: ${userId} is not found`,
          // err: err,
        });
      }

      return res.status(201).json({
        success: true,
        massage: `Patient updated`,
        results: result,
      });
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      massage: "hash password error",
      err: err,
    });
  }
};

//delete patient by id
const deletePatientById = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE patient SET is_deleted=1  WHERE id=?`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (!err) {
      res.status(404).json({
        success: true,
        message: `Succeeded to delete patient with id => ${id}`,
        result: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `The patient => ${id} is not found`,
      });
    }
  });
};

module.exports = {
  createNewPatient,
  getAllPatients,
  getPatientByPhone,
  updatePatientByid,
  deletePatientById,
};
