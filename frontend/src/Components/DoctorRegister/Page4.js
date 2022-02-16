//====================================================//Require
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addInfoPage } from "../Reducer/DoctorRegister/index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BsCheckSquareFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";

//CSS File
import "./Page4.css";

//====================================================//Page 4 Function
const Page4 = () => {
  //Selector
  const state = useSelector((state) => {
    return state.doctorRegReducer;
  });

  // =================================
  const [consultationFee, setConsultationFee] = useState(
    state.doctorInfo.consultationFee
  );
  const [departmentDoctorRegister, setDepartmentDoctorRegister] = useState(5);
  const [cityDoctorRegister, setCityDoctorRegister] = useState(1);
  const [
    ScientificCertificateDoctorRegister,
    setScientificCertificateDoctorRegister,
  ] = useState("");
  const [message, setMessage] = useState("");
  const [messageRequired, setMessageRequired] = useState("");

  //====================================================//Dispatch & Navigate
  const dispatch = useDispatch();
  const history = useNavigate();

  //====================================================//Next Button Function
  const nextButton = async () => {
    try {
      if (consultationFee) {
        if (departmentDoctorRegister) {
          if (cityDoctorRegister) {
            if (ScientificCertificateDoctorRegister) {
              const res = await dispatch(
                addInfoPage({
                  consultationFee,
                  departmentDoctorRegister,
                  cityDoctorRegister,
                  roleId: 2,
                  ScientificCertificateDoctorRegister,
                })
              );
              const result = await axios.post(
                "http://localhost:5000/doctors/",
                {
                  fullName: state.doctorInfo.fullName,
                  email: state.doctorInfo.email,
                  password: state.doctorInfo.password,
                  profileImage: state.doctorInfo.profileImage,
                  gender: state.doctorInfo.gender,
                  Nationality: state.doctorInfo.Nationality,
                  specialization: state.doctorInfo.specialization,
                  phone: state.doctorInfo.phone,
                  workingDays: state.doctorInfo.workingDays,
                  address: state.doctorInfo.address,
                  careersLicense: state.doctorInfo.careersLicense,
                  waitingTime: state.doctorInfo.waitingTime,
                  consultationFee: res.payload.consultationFee,
                  latitude: state.doctorInfo.latitude,
                  longitude: state.doctorInfo.longitude,
                  departmentId: res.payload.departmentDoctorRegister,
                  cityId: res.payload.cityDoctorRegister,
                  roleId: 2,
                  ScientificCertificate:
                    res.payload.ScientificCertificateDoctorRegister,
                }
              );
              history("/login");
            } else {
              setMessageRequired(
                "PLEASE FILL THE SCINTIFIC CERTIFICATE INPUT "
              );
            }
          } else {
            setMessageRequired("PLEASE FILL THE CITY INPUT ");
          }
        } else {
          setMessageRequired("PLEASE FILL THE DEPARTMENT INPUT ");
        }
      } else {
        setMessageRequired("PLEASE FILL THE CONSULTATION TIME INPUT ");
      }
    } catch (err) {
      console.log(err.response.data.err.sqlMessage);
      setMessage(err.response.data.err.sqlMessage);
    }
  };

  //======================================================//Return
  return (
    <>
      <div className="mainPage4">
        <div className="Page4">
          <label className="levelLabel4">
            {" "}
            Consultation , Department , City and Certificate - Step 4 of 4
          </label>{" "}
          <input
            value={consultationFee}
            placeholder="CONSULTATION FEE-EXAMPLE : 20$"
            type="text"
            className="doctorConsultationFee"
            onChange={(e) => {
              setConsultationFee(e.target.value);
            }}
          />
          <select
            className="DoctorDepartment"
            defaultValue={5}
            onChange={(e) => {
              setDepartmentDoctorRegister(e.target.value);
            }}
          >
            <option value={1}>RADIOLOGY</option>
            <option value={2}>LABORATORY</option>
            <option value={3}>PHARMACY</option>
            <option value={4}>SURGICAL</option>
            <option value={5}>MEDICAL</option>
            <option value={6}>PEDIATRIC</option>
            <option value={7}>ORTHOPIDIC</option>
            <option value={8}>OPHTHALMOLOGY</option>
            <option value={9}>DEMATOLOGY</option>
            <option value={10}>OB&GYN</option>
            <option value={11}>DENTAL</option>
            <option value={12}>PHYSIOTHERAPY</option>
            <option value={13}>CARDIOLOGY</option>
            <option value={14}>PHYCHIATRIC</option>
            <option value={15}>NEUROLOGY</option>
            <option value={16}>GENERAL DOCTOR</option>
          </select>
          <select
            className="doctorCity"
            onChange={(e) => {
              setCityDoctorRegister(e.target.value);
            }}
          >
            <option value={1}>Amman</option>
            <option value={2}>IRBID</option>
            <option value={3}>ZARQA</option>
            <option value={4}>MAFRAQ</option>
            <option value={5}>AJLOUN</option>
            <option value={6}>JERASH</option>
            <option value={7}>MADABA</option>
            <option value={8}>BALQA</option>
            <option value={9}>KARAK</option>
            <option value={10}>TAFILEH</option>
            <option value={11}>MAAN</option>
            <option value={12}>AQABA</option>
          </select>
          <input
            value={ScientificCertificateDoctorRegister}
            placeholder="CIENTIFIC CERTIFICATE"
            type="text"
            className="doctorScientificCertificate"
            onChange={(e) => {
              setScientificCertificateDoctorRegister(e.target.value);
            }}
          />{" "}
          <br />
          <div className="nextAndBackBtn">
            <button
              onClick={nextButton}
              className="backBtn"
              onClick={() => {
                history("/doctorsignup3");
              }}
            >
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextButton} className="nextBtn">
              <BsCheckSquareFill />
            </button>
          </div>
          {message ? <p>{message}</p> : ""}
          {messageRequired && (
            <div className="messageDoctorRegister">
              <FcCancel />
              {messageRequired}
              <FcCancel />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page4;
