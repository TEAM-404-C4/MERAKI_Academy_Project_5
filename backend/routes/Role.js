const express = require("express");

// Import Paitient controllers
const { createNewRole } = require("../controllers/Roles");

// Create Paitient router
const RoleRouter = express.Router();

RoleRouter.post("/", createNewRole);

module.exports = RoleRouter;
