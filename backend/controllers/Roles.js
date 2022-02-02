const connection = require("../database/db");

// This function creates new role
const createNewRole = (req, res) => {
  const role = req.body.role;
  const query = `INSERT INTO role (name) VALUE (?)`;
  const data = [role];
  connection.query(query, data, (err, result) => {
    console.log(result);
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
