import React from "react";
import { Link,useParams } from "react-router-dom";
import { FaRegMoneyBillAlt, FaHandHoldingMedical } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import "./CardDoctor.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDoctor } from "../Reducer/Doctor/";

export default function CardDoctor({
  id,
  fullName,
  address,
  profileImage,
  consultationFee,
  specialization,
  ScientificCertificate,
  city,Department,workingDays,waitingTime
})

 {
// id=useParams();
const dispatch = useDispatch();
const history = useNavigate();

  return (
    <div className="card">
      <div className="card-information">
        
          <img className="card-image" src={profileImage} alt={id} onClick={(e) => {
             dispatch(setDoctor(e.target.alt));
             history("/DoctorProfile");
            }}/>
        
      </div>
      <div className="card-information">
        <div key={id}   onClick={() => {
              dispatch(setDoctor(id));
              history("/DoctorProfile");
            }}><h3>{fullName}</h3></div>
          
        
        <h5>{Department}</h5>
        <div className="card-row">
          <FaHandHoldingMedical />
          <h6>{ScientificCertificate}</h6>
        </div>
        <div className="card-row">
          <ImLocation />
          <h6>{city},{address}</h6>
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
      <div className="card-Booking">
      <button
            value={id}
            onClick={(e) => {
              dispatch(setDoctor(e.target.value));
              console.log(e.target.value);
              history("/DoctorProfile");
            }}
          >
            Book
          </button>
      </div>
    </div>
  );
}
