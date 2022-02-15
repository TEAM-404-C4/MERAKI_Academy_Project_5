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
import "./Page2.css";

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
  const [message, setMessage] = useState("");

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
            setMessage("PLEASE SELECT THE LOCATION INPUT ");
          }
        } else {
          setMessage("PLEASE FILL THE PHONE INPUT ");
        }
      } else {
        setMessage("PLEASE FILL THE SPECIALIZATION INPUT ");
      }
    } else {
      setMessage("PLEASE FILL THE NATIONALITY INPUT ");
    }
  };

  //====================================================//Return
  return (
    <>
      <div className="mainPage2">
        <div className="Page2">
          <label className="levelLabel2">
            {" "}
            Gender , Nationality ,Specialization and Phone- Step 2 of 4
          </label>
          <select
            name={gender}
            placeholder="Gender"
            className="doctorGender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option className="test" value="MALE">
              MALE
            </option>
            <option className="test" value="FEMALE">
              FEMALE
            </option>
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
          />{" "}
          <br />
          <button className="locationButton" onClick={setLocation}>
            Upload location
          </button>
          {latitude && (
            <a
              href={`https://www.google.com/maps?q=${latitude},${longitude}`}
              target="_blank"
            >
              See my location
            </a>
          )}
          <br />
          <div className="nextAndBackBtn">
            <button
              onClick={nextButton}
              className="backBtn"
              onClick={() => {
                history("/doctorsignup1");
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

export default Page2;
