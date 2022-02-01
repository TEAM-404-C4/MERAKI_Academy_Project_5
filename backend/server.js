const express = require("express");
const PORT = 5000;
const cors = require("cors");
require("dotenv").config();
const app = express();

const db = require("./database/db");
const PaitientRouter = require("./routes/Patients");
const doctorRouter = require("./routes/Doctors");
const loginRouter = require("./routes/Login");
const RoleRouter = require("./routes/Role");

app.use(cors());

//import database
const connection = require("./database/db");

app.use(express.json());

// Routes Middleware
app.use("/patients", PaitientRouter);
app.use("/doctors", doctorRouter);
app.use("/login", loginRouter);
app.use("/role", RoleRouter);

const PORT = 5000;

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
