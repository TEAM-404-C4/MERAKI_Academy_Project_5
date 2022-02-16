//====================================================//Require
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInfoPage } from "../Reducer/DoctorRegister/index";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";

//CSS File
import "./Page2.css";

import Swal from "sweetalert2";

//====================================================//Page 2 Function
const Page2 = () => {
  const state = useSelector((state) => {
    return state.doctorRegReducer.doctorInfo;
  });

  // ====================================================
  const [gender, setGender] = useState("MALE");
  const [Nationality, setNationality] = useState(state.Nationality);
  const [specialization, setSpecialization] = useState(state.specialization);
  const [phone, setPhone] = useState(state.phone);
  const [latitude, setLatitude] = useState(state.latitude);
  const [longitude, setLongitude] = useState(state.longitude);

  // =========================================================================

  //====================================================//Dispatch & Navigate
  const history = useNavigate();
  const dispatch = useDispatch();

  // ====================================
  const setLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  //====================================================//Next Button Function
  const nextButton = async () => {
    if (Nationality) {
      if (specialization) {
        if (phone) {
          if (latitude && longitude) {
            await dispatch(
              addInfoPage({
                gender,
                Nationality,
                specialization,
                phone,
                latitude,
                longitude,
              })
            );
            history("/doctorsignup3");
          } else {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "Please Enter Your Location",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        } else {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Please Enter Your Phone",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Please Enter Your Specialization",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please Enter Your Nationality",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  //====================================================//Return
  return (
    <>
      <div className="mainPage2">
        <div className="Page2">
          <div className="labelDiv2">
            <div className="levelLabel2">
              Gender , Nationality ,Specialization and Phone- Step 2 of 4
            </div>
          </div>
          <div className="infoRegisterDoctorDiv2">
            <select
              name={gender}
              placeholder="Gender"
              className="doctorGender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
            </select>
            <input
              value={Nationality}
              placeholder="NATIONALITY"
              type="text"
              className="doctorNationality"
              onChange={(e) => {
                setNationality(e.target.value);
              }}
            />
            <input
              value={specialization}
              placeholder="SPECIALIZATION"
              type="text"
              className="doctorSpecialization"
              onChange={(e) => {
                setSpecialization(e.target.value);
              }}
            />
            <input
              value={phone}
              placeholder="PHONE"
              type="text"
              className="doctorPhone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <div className="locationButtonDiv">
              <div className="setYourLocationDiv">
                <div className="setYourLocation">Set Your Location</div>
                <div>
                  <button className="locationButton" onClick={setLocation}>
                    <GrMapLocation size={25} style={{ color: "#B600F2" }} />
                  </button>
                </div>
              </div>
              <div className="showLocation">
                <div>
                  {latitude && (
                    <a
                      href={`https://www.google.com/maps?q=${latitude},${longitude}`}
                      target="_blank"
                    >
                      <div className="locationReview">
                        <img
                          className="map"
                          src="https://sakusaku.ch/wp-content/plugins/wp-google-maps/images/icons8-google-maps-500.png"
                        />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div></div>
            <div className="nextbtn2Div">
              <button
                onClick={nextButton}
                className="backBtn2"
                onClick={() => {
                  history("/doctorsignup1");
                }}
              >
                <BsFillArrowLeftCircleFill />
              </button>
              <button onClick={nextButton} className="nextBtn2">
                <BsFillArrowRightCircleFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
