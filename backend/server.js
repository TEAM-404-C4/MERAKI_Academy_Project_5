const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
// const db = require("./database/db");
const PaitientRouter = require("./routes/patients");
const doctorRouter = require("./routes/doctors");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");

app.use(cors());

app.use(express.json());

app.use("/patients", PaitientRouter);
app.use("/doctors", doctorRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
