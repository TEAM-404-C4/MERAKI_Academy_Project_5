const connection = require("../database/db");
const bcrypt = require("bcrypt");

//Create New Doctors
const createNewDoctor = async (req, res) => {
  const query =
    "insert into doctor (fullName,email,password,profileImage,gender,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,departmentId,cityId,roleId,ScientificCertificate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  const {
    fullName,
    email,
    password,
    profileImage,
    gender,
    Nationality,
    specialization,
    phone,
    workingDays,
    address,
    careersLicense,
    waitingTime,
    consultationFee,
    departmentId,
    cityId,
    roleId,
    ScientificCertificate,
  } = req.body;

  try {
    const hashPass = await bcrypt.hash(password, 2);
    const data = [
      fullName,
      email,
      hashPass,
      profileImage,
      gender,
      Nationality,
      specialization,
      phone,
      workingDays,
      address,
      careersLicense,
      waitingTime,
      consultationFee,
      departmentId,
      cityId,
      roleId,
      ScientificCertificate,
    ];
    connection.query(query, data, (err, result) => {
      if (err) {
        res.status(500).json({
          success: false,
          massage: "server error",
          err: err,
        });
      }
      // result are the data returned by mysql server
      res.status(201).json({
        success: true,
        massage: "Create New Doctor",
        results: result,
      });
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "hash password error",
      err,
    });
  }
};
const getAllDoctors = (req, res) => {
  const query = "SELECT * FROM Doctor";
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: "All the Doctors",
      results: result,
    });
  });
};

// ============================

// get doctor by id

const getDoctorById = (req, res) => {
  const doctorId = req.params.id;

  const query = `SELECT * FROM doctor WHERE id = ?`;
  const data = [doctorId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(404).json({
        success: false,
        massage: `Server error`,
        err: err,
      });
    }
    return res.status(200).json({
      success: true,
      result,
    });
  });
};

const getDoctorByDepartment = (req, res) => {
  const { city, department } = req.body;
  let subQuery;

  let data = [department, city];
  if (city !== undefined && department !== undefined) {
    subQuery = " where departmentId = ? and cityId = ?";
  } else if (city === undefined) {
    subQuery =
      "where departmentId = ? and cityId = ALL (SELECT cityId FROM healthcare.city)";
  } else if (department === undefined) {
    subQuery =
      " where departmentId =  ALL (SELECT departmentId FROM healthcare.MedicalDepartment) and cityId = ?";
    data = [city];
  }
  // ANY (SELECT id FROM city)
  const query = `SELECT * FROM healthcare.doctor  ${subQuery}`;

  connection.query(query, data, (err, result) => {
    if (result.length === 0) {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    console.log(data);
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: "All the Doctors in MedicalDepartment = ",
      results: result,
    });
  });
};

const updateDoctorById = async (req, res) => {
  const query = `UPDATE Doctor SET fullName=?,email=?,password=?,profileImage=?,gender=?,Nationality=?,specialization=?,phone=?,workingDays=?,address=?,careersLicense=?,waitingTime=?,consultationFee=?,departmentId=?,cityId=?,ScientificCertificate=? WHERE id= ?;`;
  const {
    fullName,
    email,
    password,
    profileImage,
    gender,
    Nationality,
    specialization,
    phone,
    workingDays,
    address,
    careersLicense,
    waitingTime,
    consultationFee,
    departmentId,
    cityId,
    ScientificCertificate,
  } = req.body;

  const id = req.params.id;

  try {
    const hashPass = await bcrypt.hash(password, 2);
    const data = [
      fullName,
      email,
      hashPass,
      profileImage,
      gender,
      Nationality,
      specialization,
      phone,
      workingDays,
      address,
      careersLicense,
      waitingTime,
      consultationFee,
      departmentId,
      cityId,
      ScientificCertificate,
      id,
    ];
    connection.query(query, data, (err, result) => {
      if (err) {
        return res.status(404).json({
          success: false,
          massage: `Server error`,
          err: err,
        });
      }
      if (result.changedRows == 0) {
        res.status(404).json({
          success: false,
          massage: `The Doctor: ${id} is not found`,
          // err: err,
        });
      }
      // result are the data returned by mysql server
      res.status(201).json({
        success: true,
        massage: `Doctor updated`,
        results: result.data,
      });
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "hash pass error",
      err,
    });
  }
};
const deleteDoctorById = (req, res) => {
  const id = req.params.id;

  const query = `UPDATE Doctor SET is_deleted=1 WHERE id=?;`;

  connection.query(query, id, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    }
    if (!results.changedRows) {
      return res.status(404).json({
        success: false,
        massage: `The Doctor: ${id} is not found`,
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      massage: `Succeeded to delete Doctor with id: ${id}`,
      results: results,
    });
  });
};

//Get Doctor By NAME

const getDoctorByName = (req, res) => {
  const fullName = req.body.fullName;
  const query = `SELECT fullName FROM doctor WHERE fullName  REGEXP  ?  `;
  const data = [fullName];
  connection.query(query, data, (err, result) => {
    res.json(result);
  });
};

//get doctor by department

module.exports = {
  createNewDoctor,
  getDoctorById,
  getAllDoctors,
  updateDoctorById,
  deleteDoctorById,
  getDoctorByName,
  getDoctorByDepartment,
};
