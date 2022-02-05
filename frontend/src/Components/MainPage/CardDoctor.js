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
      <div>
      <h1>{id}</h1>
        <Link to={"/DoctorProfile/"+id}>
          {" "}
          <img className="card-image" src={profileImage} alt={fullName} />
        </Link>
      </div>
      <div className="card-information">
        <Link to={"/DoctorProfile/"+id}>
          <h3>{fullName}</h3>
        </Link>
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
