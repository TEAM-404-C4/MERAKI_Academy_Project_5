//====================================================//Require
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInfoPage } from "../Reducer/DoctorRegister/index";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

//CSS File
import "./Page2.css";

//====================================================//Page 2 Function
const Page2 = () => {
  const [gender, setGender] = useState("MALE");
  const [Nationality, setNationality] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phone, setPhone] = useState("");

  //====================================================//Dispatch & Navigate
  const history = useNavigate();
  const dispatch = useDispatch();

  //====================================================//Next Button Function
  const nextButton = async () => {
    await dispatch(addInfoPage({ gender, Nationality, specialization, phone }));
    history("/doctorsignup3");
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
            placeholder="NATIONALITY"
            type="text"
            className="doctorNationality"
            onChange={(e) => {
              setNationality(e.target.value);
            }}
          />
          <input
            placeholder="SPECIALIZATION"
            type="text"
            className="doctorSpecialization"
            onChange={(e) => {
              setSpecialization(e.target.value);
            }}
          />
          <input
            placeholder="PHONE"
            type="text"
            className="doctorPhone"
            onChange={(e) => {
              setPhone("+962" + e.target.value);
            }}
          />{" "}
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
        </div>
      </div>
    </>
  );
};

export default Page2;
