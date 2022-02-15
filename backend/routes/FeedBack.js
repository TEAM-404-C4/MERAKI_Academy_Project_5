//====================================================//Require
const express = require("express");

//====================================================//Import FeedBack Controllers
const {
    getAllFeedBack,
    createNewFeedBack,
    deleteFeedback
}= require("../controllers/FeedBack");

//====================================================//Create FeedBack Router
const FeedBackRouter = express.Router();

FeedBackRouter.post("/", createNewFeedBack);
FeedBackRouter.get('/',getAllFeedBack);
FeedBackRouter.put('/:id',deleteFeedback);

module.exports = FeedBackRouter;