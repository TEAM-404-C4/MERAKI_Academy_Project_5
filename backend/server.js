const express = require("express");
const PORT = 5000;
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());

//import database
const connection = require("./database/db");

// Import Routers
const PaitientRouter = require("./routes/patients");
const doctorRouter = require("./routes/doctors");
const loginRouter = require("./routes/login");
const RoleRouter = require("./routes/Role");
const commentRouter = require("./routes/Comment");

app.use(express.json());

// Routes Middleware
app.use("/patients", PaitientRouter);
app.use("/doctors", doctorRouter);
app.use("/login", loginRouter);
app.use("/role", RoleRouter);
app.use("/comment", commentRouter);

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
