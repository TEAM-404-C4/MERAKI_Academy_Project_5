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

  const submitPatientRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/patients/create", {
        firstName: firstNamePatient,
        lastName: lastNamePatient,
        phone: phonePatient,
        password: passwordPatient,
        roleId: 3,
      });

      console.log("result", res);
      if (res.data.success) {
        setFirstNamePatient("");
        setLastNamePatient("");
        setPhonePatient("");
        setPasswordPatient("");
        setStatus(true);
        navigate("/login");
        setMessage(res.data.message);
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        setStatus(true);
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
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
          <BsCheckSquareFill style={{ color: "green" }} />  Why to Register on
          Shafaa Network?
        </span>
        <span className="inst">
          <BsCheckSquareFill style={{ color: "green" }} />  Access a Large
          Network of Doctor.
        </span>
        <span className="inst">
          <BsCheckSquareFill style={{ color: "green" }} />  Get Medical
          Consultations via Phone Call or Whats App.
        </span>
        <span className="inst">
          <BsCheckSquareFill style={{ color: "green" }} />  Book Your Doctor
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
