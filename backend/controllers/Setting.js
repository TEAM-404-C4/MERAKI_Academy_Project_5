//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");

//====================================================//Setting Function
const ChangePatientPasswordById = (req, res) => {
  const id = req.token.userId;
  const oldPassword = req.body.oldPassword;
  let newPassword = req.body.newPassword;
  const query = `SELECT password FROM patient WHERE id =?`;
  const data = [id];
  connection.query(query, data, async (err, result) => {
    if (!err) {
      const CheckPassword = await bcrypt.compare(
        oldPassword,
        result[0].password
      );

      console.log("CheckPassword", CheckPassword);
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

const ChangePatientPhoneById = (req, res) => {
  const oldPhone = req.body.oldPhone;
  const newPhone = req.body.newPhone;
  const password = req.body.password;
  const query = `SELECT phone ,password FROM patient WHERE id=?`;
  const data = [id];
  connection.query(query, data, async (err, result) => {
    if (!err) {
      if (result[0].phone === oldPhone) {
        const CheckPassword = await bcrypt.compare(
          password,
          result[0].password
        );

        if (CheckPassword) {
          const query = `UPDATE patient SET phone=? WHERE id= ?;`;
          const data = [newPhone, id];
          connection.query(query, data, (err, result) => {
            res.status(200).json({
              success: true,
              message: "Phone Number has changed successfully",
            });
          });
        } else {
          res.status(404).json({
            success: false,
            message: "Your Password is Wrong",
          });
        }
      } else {
        res.status(404).json({
          success: false,
          message: " Old Phone Number is Wrong",
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
  ChangePatientPhoneById,
};
