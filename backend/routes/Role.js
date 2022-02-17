//====================================================//Require
const express = require("express");

//====================================================//Import Paitient Controllers
const { createNewRole } = require("../controllers/Roles");

//====================================================//Create Paitient Router
const RoleRouter = express.Router();

//====================================================// ENDPOINTS

RoleRouter.post("/", createNewRole);

//====================================================// module.exports

module.exports = RoleRouter;
