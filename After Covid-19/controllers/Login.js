//====================================================//Require
const connection = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//====================================================//Doctor Login Function
const doctorLogin = (req, res) => {
  const password = req.body.password;
  const phone = req.body.phone;
  const query = `SELECT * FROM doctor WHERE phone=?`;
  const data = [phone];
  connection.query(query, data, async (err, result) => {
    if (!result.length) {
      res.status(403).json({
        success: false,
        message: `This is account dose not exist`,
      });
    } else {
      try {
        const valid = await bcrypt.compare(password, result[0].password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result[0].id,
          role: result[0].roleId,
        };
        const options = {
          expiresIn: "120m",
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);

        res.status(200).json({
          success: true,
          message: `Login Successfully`,
          token: token,
          userId: result,
          role: result[0].roleId,
          profileImage: result[0].profileImage,
        });
        console.log(result);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  });
};

//====================================================//Patient Login Function
const login = (req, res, next) => {
  const password = req.body.password;
  const phone = req.body.phone;
  const query = `SELECT * FROM patient WHERE phone=?`;
  const data = [phone];
  connection.query(query, data, async (err, result) => {
    if (!result.length) {
      next();
    } else {
      try {
        const valid = await bcrypt.compare(password, result[0].password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result[0].id,
          role: result[0].roleId,
        };
        const options = {
          expiresIn: "60m",
        };
        const token = await jwt.sign(payload, process.env.SECRET, options);
        console.log(result);
        res.status(200).json({
          success: true,
          message: `Login Successfully`,
          token: token,
          userId: result,
          role: result[0].roleId,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    }
  });
};

module.exports = {
  login,
  doctorLogin,
};
