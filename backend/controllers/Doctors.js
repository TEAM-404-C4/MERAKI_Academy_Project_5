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
const getDoctorByDepartment=(req,res) => {
  const {city,department}=req.body;
  let subQuery;
  
  let data = [department,city ];
  if (city!==undefined &&department!==undefined) {
    subQuery=' where departmentId = ? and cityId = ?'
  }
  else if(city===undefined) {
    subQuery='where departmentId = ? and cityId = ALL (SELECT cityId FROM healthcare.city)';
    
  }
  else if(department===undefined) {
    subQuery=' where departmentId =  ALL (SELECT departmentId FROM healthcare.MedicalDepartment) and cityId = ?';
    data=[city];
  }
  // ANY (SELECT id FROM city)
  const query=`SELECT * FROM healthcare.doctor  ${subQuery}`;

  connection.query(query,data,(err,result)=>{
    if (result.length===0) {
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
}

const updateDoctorById = (req, res) => {
  const query = "UPDATE Doctor SET firstName=?  WHERE id= ?;";
  const { firstName } = req.body;
  const id = req.params.id;

  const data = [firstName, id];
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
      });
    }
    // result are the data returned by mysql server
    res.status(201).json({
      success: true,
      massage: `Doctor updated`,
      results: result.data,
    });
  });
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
  const name = req.body.name;
  const query = `SELECT fullName FROM doctor WHERE fullName  REGEXP  ?  `;
  const data = [name];
  connection.query(query, data, (err, result) => {
    res.json(result);
  });
};

//get doctor by dewpartment

module.exports = {
  createNewDoctor,
  getAllDoctors,
  updateDoctorById,
  deleteDoctorById,
  getDoctorByName,
  getDoctorByDepartment
};
