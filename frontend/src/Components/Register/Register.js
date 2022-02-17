import React, { useState } from "react";
import axios, { Axios } from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { BsCheckSquareFill } from "react-icons/bs";

import Swal from "sweetalert2";

const Register = () => {
  const [firstNamePatient, setFirstNamePatient] = useState("");
  const [lastNamePatient, setLastNamePatient] = useState("");
  const [phonePatient, setPhonePatient] = useState("");
  const [passwordPatient, setPasswordPatient] = useState("");
  const [gender, setGender] = useState("MALE");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

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
  const genderHandler = (e) => {
    setGender(e.target.value);
  };

  const submitPatientRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/patients/create", {
        firstName: firstNamePatient,
        lastName: lastNamePatient,
        phone: phonePatient,
        gender: gender,
        password: passwordPatient,
        roleId: 3,
      });

      if (res.data.success) {
        setFirstNamePatient("");
        setLastNamePatient("");
        setPhonePatient("");
        setGender("");
        setPasswordPatient("");
        setStatus(true);
        navigate("/login");
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        // setMessage(res.data.message);
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        setStatus(true);
        Swal.fire({
          position: "center",
          icon: "warning",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      }
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Error happened while Login, please try again",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <>
      <div className="RegisterHeader">
        <h1 className="signUpDiv">Sign Up</h1>
      </div>
      <div className="signUpInstructions">
        <span className="register">Register Now It's Free.</span>
        <span className="inst">
          <BsCheckSquareFill style={{ color: "#3581cc" }} />  Why to Register on
          Shafaa Network?
        </span>
        <span className="inst">
          <BsCheckSquareFill style={{ color: "#3581cc" }} />  Access a Large
          Network of Doctor.
        </span>
        <span className="inst">
          <BsCheckSquareFill style={{ color: "#3581cc" }} />  Get Medical
          Consultations via Phone Call or Whats App.
        </span>
        <span className="inst">
          <BsCheckSquareFill style={{ color: "#3581cc" }} />  Book Your Doctor
          Visit Online.
        </span>
        <div>
          {status ? message && <div className="Message">{message}</div> : <></>}
        </div>
      </div>
      <form className="patientRegisterForm" onSubmit={submitPatientRegister}>
        <div className="firstAndLastName">
          <input
            required
            placeholder="First Name"
            className="firstNamePatient"
            value={firstNamePatient}
            type="text"
            onChange={firstNameHandler}
          />
          <input
            placeholder="Last Name"
            required
            className="lastNamePatient"
            value={lastNamePatient}
            type="text"
            onChange={lastNameHandler}
          />
        </div>

        <select onChange={genderHandler} className="patientGender" required>
          <option value="MALE">MALE</option>
          <option value="FEMALE">FEMALE</option>
        </select>

        <input
          placeholder="Phone Number"
          required
          className="phonePatient"
          value={phonePatient}
          type="number"
          onChange={phoneHandler}
        />
        <input
          placeholder="Password"
          required
          className="passwordPatient"
          value={passwordPatient}
          type="password"
          minLength={6}
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
