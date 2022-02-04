import React from "react";
import { Link } from "react-router-dom";
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
}) {
  return (
    <div className="card">
      <div>
        <Link to="/">
          {" "}
          <img className="card-image" src={profileImage} alt={fullName} />
        </Link>
      </div>
      <div className="card-information">
        <Link to="/">
          <h3>{fullName}</h3>
        </Link>
        <h5>{department} </h5>
        <div className="card-row">
          <FaHandHoldingMedical />
          <h6>{ScientificCertificate}</h6>
        </div>
        <div className="card-row">
          <ImLocation />
          <h6>{address}</h6>
        </div>
        <div className="card-row">
          <FaRegMoneyBillAlt />
          <h6>{consultationFee} </h6>
        </div>
      </div>
    </div>
  );
}
