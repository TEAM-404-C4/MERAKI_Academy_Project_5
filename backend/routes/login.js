const express = require("express");

// Import doctors controllers
const { login, doctorLogin } = require("../controllers/Login");

// Create login router .
const loginRouter = express.Router();

loginRouter.post("/", login, doctorLogin);

module.exports = loginRouter;
