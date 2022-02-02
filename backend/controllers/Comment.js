const connection = require("../database/db");
//===============================

// create comment

const createComment = (req, res) => {
  const { comment, reating, doctorId } = req.body;
  const query = `INSERT INTO Comment (comment,rating,doctorId) VALUES (?,?,?)`;
  const data = [comment, reating, doctorId];

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

//============================================

// get comments

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
