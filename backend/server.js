const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
const PaitientRouter = require("./routes/Patients");
const doctorRouter = require("./routes/Doctors");
const loginRouter = require("./routes/Login");
const RoleRouter = require("./routes/Role");

app.use(cors());

app.use(express.json());

app.use("/patients", PaitientRouter);
app.use("/doctors", doctorRouter);
app.use("/login", loginRouter);
app.use("/role", RoleRouter);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
