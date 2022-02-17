//====================================================//Require
const express = require("express");

//====================================================//Import FeedBack Controllers
const {
    getAllFeedBack,
    createNewFeedBack,
    deleteFeedback,
    getAllFeedBackForGuest,
    ApproveFeedback
}= require("../controllers/FeedBack");


//====================================================//Create FeedBack Router

const FeedBackRouter = express.Router();

//====================================================// ENDPOINTS

FeedBackRouter.post("/", createNewFeedBack);

FeedBackRouter.get('/',getAllFeedBack);
FeedBackRouter.get('/getapprove',getAllFeedBackForGuest);
FeedBackRouter.put('/approve/:id',ApproveFeedback);

FeedBackRouter.delete('/:id',deleteFeedback);


//====================================================// module.exports


module.exports = FeedBackRouter;
