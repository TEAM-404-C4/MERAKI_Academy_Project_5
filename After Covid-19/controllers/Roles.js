//====================================================//Require
const connection = require("../database/db");

//====================================================//Create New Role Function
const createNewRole = (req, res) => {
  console.log("test");
  const role = req.body.role;
  const query = `INSERT INTO Role (name) VALUE (?)`;
  const data = [role];
  console.log(data);
  connection.query(query, data, (err, result) => {
    if (!err) {
      res.status(201).json({
        success: true,
        message: "Success role created",
        result: result,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "SERVER ERROR",
      });
    }
  });
};

module.exports = {
  createNewRole,
};
