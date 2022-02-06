import React from "react";
import { Link,useParams } from "react-router-dom";
import { FaRegMoneyBillAlt, FaHandHoldingMedical } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import "./CardDoctor.css";
export default function CardDoctor({
  id,
  fullName,
  address,
  profileImage,
  consultationFee,
  department,
  ScientificCertificate,
  city,Department,workingDays,waitingTime
})
 {
// id=useParams();

  return (
    <div className="card">
      <div className="card-information">
        
          <img className="card-image" src={profileImage} alt={fullName} />
        
      </div>
      <div className="card-information">
        
          <h3>{fullName}</h3>
        
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
    </div>
  );
}
