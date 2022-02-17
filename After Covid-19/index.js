//====================================================//Require
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

//==================================================== to make sure it works on refresh//

//==================================================== to make sure it works on refresh//

const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//====================================================//import database
const connection = require("./database/db");

//====================================================// Import Routers
const PaitientRouter = require("./routes/patients");
const doctorRouter = require("./routes/doctors");
const loginRouter = require("./routes/login");
const RoleRouter = require("./routes/Role");
const commentRouter = require("./routes/Comment");
const FeedBackRouter = require("./routes/FeedBack");
app.use(express.json());

//====================================================// Routes Middleware
app.use("/patients", PaitientRouter);
app.use("/doctors", doctorRouter);
app.use("/login", loginRouter);
app.use("/role", RoleRouter);
app.use("/comment", commentRouter);
app.use("/feedback", FeedBackRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
//====================================================// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
