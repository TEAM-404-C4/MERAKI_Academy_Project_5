//====================================================//Require
import React from "react";
import { Link } from "react-router-dom";
import { FaRegMoneyBillAlt, FaHandHoldingMedical } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

//CSS File
import "./CardDoctor.css";

//====================================================//Create Card Doctor Function
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
  //====================================================//Return
  return (
    <div className="card">
      <div>
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
        <Link to={"/DoctorProfile/" + id}>
          <h3>{fullName}</h3>
        </Link>
        <h5>{Department}</h5>
        <div className="card-row">
          <FaHandHoldingMedical />
          <h6>{ScientificCertificate}</h6>
        </div>
        <div className="card-row">
          <ImLocation />
          <h6>
            {city},{address}
          </h6>
        </div>
        <div className="card-row">
          <FaRegMoneyBillAlt />
          <h6>{waitingTime} </h6>
        </div>
        <div className="card-row">
          <FaRegMoneyBillAlt />
          <h6>{workingDays} </h6>
        </div>
        <div className="card-row">
          <FaRegMoneyBillAlt />
          <h6>{consultationFee} </h6>
        </div>
      </div>
    </div>
  );
};

export default CardDoctor;
