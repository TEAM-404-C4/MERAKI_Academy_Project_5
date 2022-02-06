//====================================================//Require
const express = require("express");

//====================================================//Import doctors Controllers
const { login, doctorLogin } = require("../controllers/Login");

//====================================================//Create login Router
const loginRouter = express.Router();

loginRouter.post("/", login, doctorLogin);

module.exports = loginRouter;
