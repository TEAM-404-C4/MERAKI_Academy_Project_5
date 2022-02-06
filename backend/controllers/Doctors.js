//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");

//====================================================//Create New Doctor
const createNewDoctor = async (req, res) => {
  const query =
    "insert into doctor (fullName,email,password,profileImage,gender,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,departmentId,cityId,roleId,ScientificCertificate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
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
        return res.status(500).json({
          success: false,
          massage: "server error",
          err: err,
        });
      }
      // result are the data returned by mysql server
      return res.status(201).json({
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

//===================================================//Get All Doctor
const getAllDoctors = (req, res) => {
  const query =
    "SELECT healthcare.doctor.id,healthcare.doctor.fullName,healthcare.doctor.email,healthcare.doctor.password,healthcare.doctor.profileImage,healthcare.doctor.gender,healthcare.doctor.status,healthcare.doctor.Nationality,healthcare.doctor.specialization,healthcare.doctor.phone,healthcare.doctor.workingDays,healthcare.doctor.address,healthcare.doctor.careersLicense,healthcare.doctor.waitingTime,healthcare.doctor.consultationFee,healthcare.doctor.ScientificCertificate,healthcare.city.Name as 'city',healthcare.medicaldepartment.Name as 'Department' FROM healthcare.doctor Join healthcare.city on healthcare.city.id=healthcare.doctor.cityId Join healthcare.medicaldepartment on healthcare.medicaldepartment.id=healthcare.doctor.departmentId where healthcare.doctor.is_deleted = 0 ";
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    // console.log(result);
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: "All the Doctors",
      results: result,
    });
  });
};

//===================================================//Get Doctor By Id
const getDoctorById = (req, res) => {
  const doctorId = req.params.id;

  const query = `SELECT healthcare.doctor.id,healthcare.doctor.fullName,healthcare.doctor.email,healthcare.doctor.password,healthcare.doctor.profileImage,healthcare.doctor.gender,healthcare.doctor.status,healthcare.doctor.Nationality,healthcare.doctor.specialization,healthcare.doctor.phone,healthcare.doctor.workingDays,healthcare.doctor.address,healthcare.doctor.careersLicense,healthcare.doctor.waitingTime,healthcare.doctor.consultationFee,healthcare.doctor.ScientificCertificate,healthcare.city.Name as 'city',healthcare.medicaldepartment.Name as 'Department' FROM healthcare.doctor Join healthcare.city on healthcare.city.id=healthcare.doctor.cityId Join healthcare.medicaldepartment on healthcare.medicaldepartment.id=healthcare.doctor.departmentId 
  WHERE healthcare.doctor.id = ? and healthcare.doctor.is_deleted = 0`;

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

//===================================================//Get Doctor By Department
const getDoctorByDepartment = (req, res) => {
  const { city, department } = req.body;
  let subQuery;
  let data = [department, city];
  if (city != 0 && department != 0) {
    subQuery = `departmentId = ? AND cityId = ?`;
    data = [department, city];
  } else if (city == 0 && department == 0) {
    subQuery = true;
  } else if (city == undefined || city == 0) {
    subQuery =
      " departmentId = ? and cityId = ALL (SELECT cityId FROM healthcare.city)";
    data = [department];
  } else if (department == undefined || department == 0) {
    subQuery =
      "  departmentId =  ALL (SELECT departmentId FROM healthcare.MedicalDepartment) and cityId = ?";
    data = [city];
  }
  // ANY (SELECT id FROM city)
  // const query = `SELECT * FROM healthcare.doctor  ${subQuery} Join healthcare.city on healthcare.city.id=healthcare.doctor.cityId Join healthcare.medicaldepartment on healthcare.medicaldepartment.id=healthcare.doctor.departmentId`;
  const query = `SELECT healthcare.doctor.id,healthcare.doctor.fullName,healthcare.doctor.email,healthcare.doctor.password,healthcare.doctor.profileImage,healthcare.doctor.gender,healthcare.doctor.status,healthcare.doctor.Nationality,healthcare.doctor.specialization,healthcare.doctor.phone,healthcare.doctor.workingDays,healthcare.doctor.address,healthcare.doctor.careersLicense,healthcare.doctor.waitingTime,healthcare.doctor.consultationFee,healthcare.doctor.ScientificCertificate,healthcare.city.Name as 'city',healthcare.medicaldepartment.Name as 'Department' FROM healthcare.doctor Join healthcare.city on healthcare.city.id=healthcare.doctor.cityId Join healthcare.medicaldepartment on healthcare.medicaldepartment.id=healthcare.doctor.departmentId  where doctor.is_deleted = 0 and (${subQuery})`;
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.json(err);
    }

    if (result.length === 0) {
      return res.status(200).json({ result: [] });
    }
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: "All the Doctors in MedicalDepartment = ",
      result: result,
    });
  });
};

//===================================================//Update Doctor By Id
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

//===================================================//Delete Doctor By Department
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

//===================================================//Get Doctor By Name
const getDoctorByName = (req, res) => {
  const fullName = req.body.fullName;

  const query = `SELECT healthcare.doctor.id,healthcare.doctor.fullName,healthcare.doctor.email,healthcare.doctor.password,healthcare.doctor.profileImage,healthcare.doctor.gender,healthcare.doctor.status,healthcare.doctor.Nationality,healthcare.doctor.specialization,healthcare.doctor.phone,healthcare.doctor.workingDays,healthcare.doctor.address,healthcare.doctor.careersLicense,healthcare.doctor.waitingTime,healthcare.doctor.consultationFee,healthcare.doctor.ScientificCertificate,healthcare.city.Name as 'city',healthcare.medicaldepartment.Name as 'Department' FROM healthcare.doctor Join healthcare.city on healthcare.city.id=healthcare.doctor.cityId Join healthcare.medicaldepartment on healthcare.medicaldepartment.id=healthcare.doctor.departmentId  where healthcare.doctor.is_deleted = 0 and healthcare.doctor.fullName  REGEXP  ?  `;
  const data = [fullName];
  connection.query(query, data, (err, result) => {
    if (result) {
      return res.json({
        success: true,
        result,
      });
    }
    return res.json({
      success: true,
      result: "",
    });
  });
};

module.exports = {
  createNewDoctor,
  getDoctorById,
  getAllDoctors,
  updateDoctorById,
  deleteDoctorById,
  getDoctorByName,
  getDoctorByDepartment,
};
