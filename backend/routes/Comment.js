//====================================================//Require
const express = require("express");

//====================================================//Require Functions
const { getAllComments, createComment } = require("../controllers/Comment");
const commentRouter = express.Router();

commentRouter.get("/", getAllComments);
commentRouter.post("/create", createComment);

module.exports = commentRouter;
