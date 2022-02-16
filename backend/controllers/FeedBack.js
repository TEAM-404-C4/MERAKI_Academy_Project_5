const connection = require("../database/db");

const getAllFeedBack=(req, res)=>{
    const query='Select * from feedback where is_deleted=0 ';
    connection.query(query,(err, result)=>{
        if (err) {
            res.status(500).json({
              success: false,
              message: "server error",
              err: err,
            });
          }
          res.status(200).json({
            success: true,
            message: "All the Feed Back",
            results: result,
          });
    })
};
const createNewFeedBack=(req, res)=>{
    const query='INSERT INTO feedback (fullName,email,subject,message) VALUES (?,?,?,?)';
    const {fullName,email,subject,message}=req.body;
    const data=[fullName,email,subject,message];
    connection.query(query,data,(err, result)=>{
        if (err) {
            res.status(500).json({
              success: false,
              message: "server error",
              err: err,
            });
          }
          res.status(201).json({
            success: true,
            message: "Thank You For Send FeedBack"
          });
    });
};
const deleteFeedback=(req, res)=>{
const query='UPDATE feedback SET is_deleted=1 where id = ?';
const data=[req.params.id];
connection.query(query,data,(err, result)=>{
    if (err) {
        res.status(500).json({
          success: false,
          message: "server error",
          err: err,
        });
      }
      res.status(202).json({
        success: true,
        message: `SuccessFully Deleted feedback where id => ${req.params.id}`
      });
});
};
module.exports = {
    getAllFeedBack,
    createNewFeedBack,
    deleteFeedback
}