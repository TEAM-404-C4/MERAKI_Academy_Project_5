//====================================================//Require
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInfoPage } from "../Reducer/DoctorRegister/index";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Swal from "sweetalert2";
import "./Page3.css";

//====================================================//Page 3 COMPONENT
const Page3 = () => {
  //====================================================// useSelector
  const state = useSelector((state) => {
    return state.doctorRegReducer.doctorInfo;
  });

  // ======================================================
  const [workingDays, setWorkingDays] = useState(state.workingDays);
  const [address, setAddress] = useState(state.address);
  const [careersLicense, setCareersLicense] = useState(state.careersLicense);
  const [waitingTime, setWaitingTime] = useState(state.waitingTime);

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
              placeholder="WORKING DAYS - EXAMPLE : SUN,MON...etc."
              type="text"
              className="doctorWorkingDays"
              onChange={(e) => {
                setWorkingDays(e.target.value);
              }}
            />
            <input
              value={address}
              placeholder="ADDRESS - EXAMPLE : 34 Stone Street,Jackson,FL 34."
              type="text"
              className="doctorAddress"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <input
              value={careersLicense}
              placeholder="CAREERS LICENES"
              type="text"
              className="doctorCareersLicense"
              onChange={(e) => {
                setCareersLicense(e.target.value);
              }}
            />
            <input
              value={waitingTime}
              placeholder="WATING TIME in min - EXAMPLE : 30 min."
              type="text"
              className="doctorWaitingTime"
              onChange={(e) => {
                setWaitingTime(e.target.value);
              }}
            />
            <div className="nextbtn3Div">
              <button
                onClick={nextButton}
                className="backBtn3"
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
