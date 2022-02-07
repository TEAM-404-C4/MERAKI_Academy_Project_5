//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");

//====================================================//Setting Function
const ChangePatientPasswordById = (req, res) => {
  const id = req.params.id;
  const oldPassword = req.body.oldpassword;
  let newPassword = req.body.newPassword;
  const query = `SELECT password FROM patient WHERE id =?`;
  const data = [id];
  console.log("////////////////////////////", newPassword);
  connection.query(query, data, async (err, result) => {
    if (!err) {
      const CheckPassword = await bcrypt.compare(
        oldPassword,
        result[0].password
      );
      if (CheckPassword) {
        const query = `UPDATE patient SET password=? WHERE id= ?;`;
        newPassword = await bcrypt.hash(newPassword, 5);
        const data = [newPassword, id];
        connection.query(query, data, (err, result) => {
          if (!err) {
            res.status(200).json({
              success: true,
              message: "Password has changed successfully",
            });
          }
        });
      } else {
        res.status(404).json({
          success: false,
          message: " Old Password is Wrong",
        });
      }
    } else {
      res.status(500).json({
        success: false,
        message: "SERVER ERROR",
      });
    }
  });
};

module.exports = {
  ChangePatientPasswordById,
};
