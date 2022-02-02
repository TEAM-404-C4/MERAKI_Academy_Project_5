const connection = require("../database/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// This function checks user login credentials
const login = (req, res) => {
  const password = req.body.password;
  const phone = req.body.phone;
  const query = `SELECT * FROM patient WHERE phone=?`;
  const data = [phone];
  connection.query(query, data, async (err, result) => {
    console.log("result", result);
    if (!result.length) {
      res.status(404).json({
        success: false,
        message: `The account doesn't exist`,
      });
    } else {
      try {
        console.log("password", result[0].password);
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

        res.status(200).json({
          success: true,
          message: `Valid login credentials`,
          token: token,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    }
  });
};

module.exports = {
  login,
};
