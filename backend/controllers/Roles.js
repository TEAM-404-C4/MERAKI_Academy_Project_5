//====================================================//Require
const connection = require("../database/db");

//====================================================//Create New Role Function
const createNewRole = (req, res) => {
  const role = req.body.role;
  const query = `INSERT INTO role (name) VALUE (?)`;
  const data = [role];
  connection.query(query, data, (err, result) => {
    if (!err) {
    return  res.status(201).json({
        success: true,
        message: "Success role created",
        result: result,
      });
    } else {
     return res.status(500).json({
        success: false,
        message: "SERVER ERROR",
      });
    }
  });
};

//====================================================//module.exports


module.exports = {
  createNewRole,
};
