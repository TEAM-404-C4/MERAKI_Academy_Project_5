import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInfoPage } from "../Reducer/DoctorRegister/index";
import "./Page3.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Page3 = () => {
  const [workingDays, setWorkingDays] = useState("");
  const [address, setAddress] = useState("");
  const [careersLicense, setCareersLicense] = useState("");
  const [waitingTime, setWaitingTime] = useState("");

  // =========================================

  const dispatch = useDispatch();
  const history = useNavigate();

  const nextButton = async () => {
    await dispatch(
      addInfoPage({ workingDays, address, careersLicense, waitingTime })
    );
    history("/doctorsignup4");
  };

  return (
    <>
      <div className="mainPage3">
        <div className="Page3">
          <label className="levelLabel3">
            {" "}
            Working Days , Address , Licenes and Wating - Step 3 of 4
          </label>
          <input
            placeholder="Working Days"
            type="text"
            className="doctorWorkingDays"
            onChange={(e) => {
              setWorkingDays(e.target.value);
            }}
          />
          <input
            placeholder="Address"
            type="text"
            className="doctorAddress"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <input
            placeholder="Careers Licenes"
            type="text"
            className="doctorCareersLicense"
            onChange={(e) => {
              setCareersLicense(e.target.value);
            }}
          />
          <input
            placeholder="Wating Time"
            type="text"
            className="doctorWaitingTime"
            onChange={(e) => {
              setWaitingTime(e.target.value);
            }}
          />{" "}
          <br />
          <div className="nextAndBackBtn">
            <button
              onClick={nextButton}
              className="backBtn"
              onClick={() => {
                history("/doctorsignup2");
              }}
            >
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextButton} className="nextBtn">
              <BsFillArrowRightCircleFill />
            </button>
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Page3;
