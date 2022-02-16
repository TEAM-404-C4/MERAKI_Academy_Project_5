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
import Swal from "sweetalert2";

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
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "Please Enter The Wating Time ",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        } else {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Please Enter The Career License ",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Please Enter The Address  ",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please Enter The Working Days",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  //====================================================//Return
  return (
    <>
      <div className="mainPage3">
        <div className="Page3">
          <div className="labelDiv3">
            <div className="levelLabel3">
              Working Days , Address , Licenes and Wating - Step 3 of 4
            </div>
          </div>
          <div className="infoRegisterDoctorDiv3">
            <input
              value={workingDays}
              placeholder="Working Days for example sun,mon...etc"
              type="text"
              className="doctorWorkingDays"
              onChange={(e) => {
                setWorkingDays(e.target.value);
              }}
            />
            <input
              value={address}
              placeholder="Address for example : 34 Stone Street,Jackson,FL 34."
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
              placeholder="Wating Time in min for example : 30 min"
              type="text"
              className="doctorWaitingTime"
              onChange={(e) => {
                setWaitingTime(e.target.value);
              }}
            />
            <div className="nextbtn3Div">
              <button
                onClick={nextButton}
                className="backBtn2"
                onClick={() => {
                  history("/doctorsignup2");
                }}
              >
                <BsFillArrowLeftCircleFill />
              </button>
              <button onClick={nextButton} className="nextBtn3">
                <BsFillArrowRightCircleFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
