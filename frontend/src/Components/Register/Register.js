import React, { useState } from "react";
import axios, { Axios } from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { BsCheckSquareFill } from "react-icons/bs";

const Register = () => {
  const [firstNamePatient, setFirstNamePatient] = useState("");
  const [lastNamePatient, setLastNamePatient] = useState("");
  const [phonePatient, setPhonePatient] = useState("");
  const [passwordPatient, setPasswordPatient] = useState("");
  const [message, setMessage] = useState("");

  // ===============================================
  const navigate = useNavigate();

  const firstNameHandler = (e) => {
    setFirstNamePatient(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastNamePatient(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhonePatient(`${e.target.value}`);
  };
  const passwordHandler = (e) => {
    setPasswordPatient(e.target.value);
  };

  const submitPatientRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/patients/create", {
        firstName: firstNamePatient,
        lastName: lastNamePatient,
        phone: phonePatient,
        password: passwordPatient,
        roleId: 3,
      });
      console.log(result);
      setMessage("successfully");
      setFirstNamePatient("");
      setLastNamePatient("");
      setPhonePatient("");
      setPasswordPatient("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="RegisterHeader">
        <h1>Sign Up</h1>
      </div>
      <div className="signUpInstructions">
        <span className="register">Register Now It's Free.</span>
        <span className="inst">
          {" "}
          <BsCheckSquareFill style={{ color: "green" }} />  Why to Register on
          Shafaa Network?{" "}
        </span>
        <span className="inst">
          <BsCheckSquareFill style={{ color: "green" }} />  Access a Large
          Network of Doctor .{" "}
        </span>
        <span className="inst">
          {" "}
          <BsCheckSquareFill style={{ color: "green" }} />  Get Medical
          Consultations via Phone Call or Whats App.
        </span>
        <span className="inst">
          <BsCheckSquareFill style={{ color: "green" }} />  Book Your Doctor
          Visit Online.
        </span>
      </div>
      <form className="patientRegisterForm" onSubmit={submitPatientRegister}>
        <div className="firstAndLastName">
          <input
            placeholder="First Name"
            className="firstNamePatient"
            value={firstNamePatient}
            type="text"
            onChange={firstNameHandler}
          />
          <input
            placeholder="Last Name"
            className="lastNamePatient"
            value={lastNamePatient}
            type="text"
            onChange={lastNameHandler}
          />
        </div>

        <input
          placeholder="Phone Number"
          className="phonePatient"
          value={phonePatient}
          type="text"
          onChange={phoneHandler}
        />
        <input
          placeholder="Password"
          className="passwordPatient"
          value={passwordPatient}
          type="password"
          onChange={passwordHandler}
        />
        <div className="DoctorRoute">
          <span>
            Are you a doctor?
            <button
              className="clickmebtn"
              onClick={() => {
                navigate("/doctorsignup1");
              }}
            >
                Click Here
            </button>
          </span>
        </div>
        <button className="signUpBtn"> Sign Up </button>
      </form>
    </>
  );
};

export default Register;
