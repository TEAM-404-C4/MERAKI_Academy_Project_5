//====================================================//Require
const express = require("express");

//====================================================//Require Functions
const { getAllComments, createComment } = require("../controllers/Comment");
const commentRouter = express.Router();

commentRouter.post("/", getAllComments);
commentRouter.post("/create", createComment);

//====================================================// module.exports

module.exports = commentRouter;
