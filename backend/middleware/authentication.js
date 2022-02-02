const jwt = require("jsonwebtoken");

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
        message: "the time out",
      });
    }
    return res.status(403).json({
      success: false,
      message: "the token is not correct",
    });
  }
};

module.exports = {authentication};
