import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./Components/navigation/navigation";
import Login from "./Components/login/login";
import Register from "./Components/Register/Register";
import MainPage from "./Components/MainPage/MainPage";
import DoctorProfile from "./Components/DoctorProfile/DoctorProfile";
import Page1 from "./Components/DoctorRegister/Page1";
import Page2 from "./Components/DoctorRegister/Page2";
import Page3 from "./Components/DoctorRegister/Page3";
import Page4 from "./Components/DoctorRegister/Page4";
import Booking from "./Components/Booking/Booking";
import Setting from "./Components/Settings/Setting";
import Appointement from "./Components/DoctorAppointment/Appointement";
import DoctorMyProfile from "./Components/DoctorProfile/DoctorMyProfile";
import Dashboard from "./Components/Dashboard/Dashboard";

//App Function
function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/doctormyprfile" element={<DoctorMyProfile />} />
        <Route path="/appointement" element={<Appointement />} />
        <Route path="/doctorsignup1" element={<Page1 />} />
        <Route path="/doctorsignup2" element={<Page2 />} />
        <Route path="/doctorsignup3" element={<Page3 />} />
        <Route path="/doctorsignup4" element={<Page4 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/DoctorProfile" element={<DoctorProfile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
