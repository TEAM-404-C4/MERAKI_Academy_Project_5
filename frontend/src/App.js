import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./Components/navigation/navigation";
import Login from "./Components/login/login";
import Register from "./Components/Register/Register";
import MainPage from "./Components/MainPage/MainPage";
import DoctorProfile from "./Components/DoctorProfile/DoctorProfile";

//App Function
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
