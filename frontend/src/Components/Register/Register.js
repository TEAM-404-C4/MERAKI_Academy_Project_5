import React, { useState } from "react";
import axios, { Axios } from "axios";

const Register = () => {
  const [firstNamePatient, setFirstNamePatient] = useState("");
  const [lastNamePatient, setLastNamePatient] = useState("");
  const [phonePatient, setPhonePatient] = useState("");
  const [passwordPatient, setPasswordPatient] = useState("");
  const [message, setMessage] = useState("");

  // ===============================================

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
    <div>
      <form className="patientRegisterForm" onSubmit={submitPatientRegister}>
        <input
          placeholder="FIRST NAME"
          className="firstNamePatient"
          value={firstNamePatient}
          type="text"
          onChange={firstNameHandler}
        />
        <input
          placeholder="LAST NAME"
          className="lastNamePatient"
          value={lastNamePatient}
          type="text"
          onChange={lastNameHandler}
        />{" "}
        <br />
        <label>+962</label>
        <input
          placeholder="PHONE NUMBER"
          className="phonePatient"
          value={phonePatient}
          type="text"
          onChange={phoneHandler}
        />
        <input
          placeholder="PASSWORD"
          className="passwordPatient"
          value={passwordPatient}
          type="password"
          onChange={passwordHandler}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
