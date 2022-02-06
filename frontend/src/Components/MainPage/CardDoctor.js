//====================================================//Require
import React from "react";
import { Link } from "react-router-dom";
import { FaRegMoneyBillAlt, FaHandHoldingMedical } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { setDoctor } from "../Reducer/Doctor/";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//CSS File
import "./CardDoctor.css";

//=====================================================//Create Card Doctor Function

const CardDoctor = ({
  id,
  fullName,
  address,
  profileImage,
  consultationFee,
  department,
  ScientificCertificate,
  city,
  Department,
  workingDays,
  waitingTime,
}) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  //====================================================//Return
  return (

    <div className="mainPageDiv">
      <div className="card">
        <div className="CardImage">
          <img
            className="card-image"
            src={profileImage}
            alt={fullName}
            onClick={(id) => {
              dispatch(setDoctor(id));
              history("/DoctorProfile");
            }}
          />

        </div>
        <div className="card-information">
          <div>Dr.{fullName}</div>
          <div>Doctor in {Department}</div>
          <div className="card-row">
            <div>{ScientificCertificate}</div>
          </div>
          <div className="card-row">
            <div>
              Location : {city},{address}
            </div>
          </div>
          <div className="card-row">
            <div>Waiting time : {waitingTime} </div>
          </div>
          <div className="card-row">
            <div>Fees : {consultationFee} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDoctor;
