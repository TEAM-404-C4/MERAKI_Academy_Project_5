//====================================================//Require
const jwt = require("jsonwebtoken");

//====================================================//authentication

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ").pop();
    const result = await jwt.verify(token, process.env.SECRET);
    req.token = result;
    next();
  } catch (err) {
    if (err.expiredAt) {
      return res.status(403).json({
        success: false,
        message: "The Time out login in agaim",
      });
    }
    return res.status(403).json({
      success: false,
      message: "the token is not correct",
    });
  }
};

//====================================================//module.exports

module.exports = { authentication };
