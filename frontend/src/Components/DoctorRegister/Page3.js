//====================================================//Require
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInfoPage } from "../Reducer/DoctorRegister/index";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { FcCancel } from "react-icons/fc";

//CSS File
import "./Page3.css";

//====================================================//Page 3 Function
const Page3 = () => {
  const state = useSelector((state) => {
    return state.doctorRegReducer.doctorInfo;
  });

  // ======================================================
  const [workingDays, setWorkingDays] = useState(state.workingDays);
  const [address, setAddress] = useState(state.address);
  const [careersLicense, setCareersLicense] = useState(state.careersLicense);
  const [waitingTime, setWaitingTime] = useState(state.waitingTime);
  const [message, setMessage] = useState("");

  //====================================================//Dispatch & Navigate
  const dispatch = useDispatch();
  const history = useNavigate();

  //====================================================//Next Button Function
  const nextButton = async () => {
    if (workingDays) {
      if (address) {
        if (careersLicense) {
          if (waitingTime) {
            await dispatch(
              addInfoPage({ workingDays, address, careersLicense, waitingTime })
            );
            history("/doctorsignup4");
          } else {
            setMessage("PLEASE FILL THE WORKING DAYS INPUT ");
          }
        } else {
          setMessage("PLEASE FILL THE ADDRESS INPUT ");
        }
      } else {
        setMessage("PLEASE FILL THE CAREER LICENSE INPUT ");
      }
    } else {
      setMessage("PLEASE FILL THE WATING TIME INPUT ");
    }
  };

  //====================================================//Return
  return (
    <>
      <div className="mainPage3">
        <div className="Page3">
          <label className="levelLabel3">
            Working Days , Address , Licenes and Wating - Step 3 of 4
          </label>
          <input
            value={workingDays}
            placeholder="Working Days"
            type="text"
            className="doctorWorkingDays"
            onChange={(e) => {
              setWorkingDays(e.target.value);
            }}
          />
          <input
            value={address}
            placeholder="Address"
            type="text"
            className="doctorAddress"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <input
            value={careersLicense}
            placeholder="Careers Licenes"
            type="text"
            className="doctorCareersLicense"
            onChange={(e) => {
              setCareersLicense(e.target.value);
            }}
          />
          <input
            value={waitingTime}
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
          {message && (
            <div className="messageDoctorRegister">
              <FcCancel />
              {message}
              <FcCancel />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page3;
