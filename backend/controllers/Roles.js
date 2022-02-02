const connection = require("../database/db");

// This function creates new role
const createNewRole = (req, res) => {
  const query = ``;
  const data = [];
  connection.query(query, data, (err, result) => {
    res.josn(result);
  });
};

module.exports = {
  createNewRole,
};
