const express = require("express");
const { getAllComments, createComment } = require("../controllers/Comment");
const { authentication } = require("../middleware/authentication");

const commentRouter = express.Router();

commentRouter.get("/", getAllComments);
commentRouter.post("/create", createComment);

module.exports = commentRouter;
