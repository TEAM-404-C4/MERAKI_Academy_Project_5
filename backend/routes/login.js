//====================================================//Require
const express = require("express");

//====================================================//Import doctors Controllers
const { login, doctorLogin ,adminLogin} = require("../controllers/Login");

//====================================================//Create login Router
const loginRouter = express.Router();

loginRouter.post("/",adminLogin, login, doctorLogin);

module.exports = loginRouter;
