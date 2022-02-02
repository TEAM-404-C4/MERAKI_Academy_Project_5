const connection = require("../database/db");

//Create New Doctors
const createNewDoctor = (req, res) => {
  const query = "insert into doctor (firstName,lastName,email,password,profileImage,gender,Nationality,specialization,phone,workingDays,address,careersLicense,waitingTime,consultationFee,departmentId,cityId,roleId,ScientificCertificate) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
  const { firstName, lastName, email, password, profileImage, gender, Nationality, specialization, phone, workingDays, address, careersLicense, waitingTime, consultationFee, departmentId, cityId, roleId, ScientificCertificate } = req.body;
  const data = [
    firstName, lastName, email, password,
     profileImage, gender, Nationality,
      specialization, phone, workingDays,
       address, careersLicense, waitingTime, consultationFee, departmentId, 
    cityId, roleId, ScientificCertificate
  ];
  connection.query(query, data,(err, result) => {
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
};
const getAllDoctors=(req,res) => {
  const query="SELECT * FROM Doctor";
  connection.query(query,(err,result)=>{
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
      massage: "All the Doctors",
      results: result,
    });
  });
}
module.exports = {
  createNewDoctor,
};
