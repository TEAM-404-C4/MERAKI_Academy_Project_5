import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInfoPage } from "../Reducer/DoctorRegister/index";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import "./Page1.css";

const Page1 = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  // =================================================

  const dispatch = useDispatch();
  const history = useNavigate();

  const nextButton = async () => {
    await dispatch(addInfoPage({ fullName, email, password, image }));
    history("/doctorsignup2");
  };

  return (
    <>
      <div className="mainPage1">
        <div className="Page1">
          <label className="levelLabel1">
            {" "}
            Name , Email and Password - Step 1 of 5
          </label>
          <input
            placeholder="Full Name"
            type="text"
            className="fullName"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <input
            placeholder="E-Mail"
            type="email"
            className="doctorEmail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            type="password"
            className="doctorPassword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="file"
            className="doctorProfileImage"
            id="image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <button onClick={nextButton} className="nextBtn">
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default Page1;
