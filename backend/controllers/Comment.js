//====================================================//Require 
const connection = require("../database/db");

//====================================================//Create Comment Function
const createComment = (req, res) => {
  const { comment, reating, doctorId } = req.body;
  const query = `INSERT INTO Comment (comment,rating,doctorId) VALUES (?,?,?)`;
  const data = [comment, reating, doctorId];
  // connnection query
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        err,
      });
    }
    return res.status(201).json({
      success: true,
      result,
    });
  });
};

//====================================================//Get All Comments Function
const getAllComments = (req, res) => {
  const doctorId = req.body.doctorId;
  const query = `SELECT comment,rating FROM Comment where doctorId=?`;
  const data = [doctorId];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(200).json({
        success: true,
        result,
      });
    }

    return res.status(200).json({
      success: true,
      result,
    });
  });
};

module.exports = { createComment, getAllComments };
