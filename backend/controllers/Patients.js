//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");

//====================================================//Create New Patient Function
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

//====================================================//Get All Patients Function
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
//====================================================//Get  Patients by id Function
const getPatientById = (req, res) => {
  const query = `SELECT * FROM patient WHERE id=?`;
  const id = req.params.id;
  console.log(id);
  const data = [id];
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
        message: `GET patients`,
        result,
      });
    }
  });
};

//====================================================//Get Patient By Phone Function
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

//====================================================//Update Patient By Id
const updatePatientByid = (req, res) => {
  userId = req.token.userId;
  const { firstName, lastName, password } = req.body;
  const query = `SELECT password FROM patient WHERE id= ?`;
  const data = [userId];
  connection.query(query, data, async (err, result) => {
    if (!err) {
      const CheckPassword = await bcrypt.compare(password, result[0].password);
      if (CheckPassword) {
        const query = `UPDATE patient SET firstName=?, lastName=? WHERE id= ?`;
        const data = [firstName, lastName, userId];
        connection.query(query, data, (err, result) => {
          if (!err) {
            return res.status(201).json({
              success: true,
              massage: `Patient updated`,
              results: result,
            });
          } else {
            return res.status(500).json({
              success: false,
              massage: "server error",
              err: err,
            });
          }
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "Your Password is Wrong",
        });
      }
    }
  });
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
  getPatientById,
  getPatientByPhone,
  updatePatientByid,
  deletePatientById,
};
