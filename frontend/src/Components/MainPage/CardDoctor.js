//====================================================//Require
import React from "react";
import { Link } from "react-router-dom";
import { FaRegMoneyBillAlt, FaHandHoldingMedical } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { setDoctor } from "../Reducer/Doctor/";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";

//CSS File
import "./CardDoctor.css";

//====================================================//Create Card Doctor Function
const CardDoctor = ({
  id,
  fullName,
  address,
  profileImage,
  consultationFee,
  specialization,
  ScientificCertificate,
  city,
  Department,
  workingDays,
  waitingTime,
  latitude,
  longitude,
}) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  //====================================================//Return
  return (
    <div className="mainPageDiv">
      <div className="card">
        <div className="CardImageDiv">
          <img
            className="card-image"
            src={profileImage}
            alt={fullName}
            onClick={() => {
              dispatch(setDoctor(id));
              history("/DoctorProfile");
            }}
          />
        </div>
        {/*  */}
        <div className="card-information">
          <div
            className="doctorNameDiv"
            onClick={() => {
              dispatch(setDoctor(id));
              history("/DoctorProfile");
            }}
          >
            <div className="DoctorName">Doctor</div> {fullName}
          </div>
          <div className="Rating"></div>

          <div className="card-row">
            <FaUserMd style={{ color: "#91D1BD" }} />
            {Department} specialized in {specialization}
          </div>
          <div className="card-row">
            <div>
              <GrCertificate /> Scientific Certificate : {ScientificCertificate}
            </div>
          </div>
          <div className="card-row">
            <div>
              <HiLocationMarker style={{ color: "#0EB800" }} />
              Location : {city},{address}
            </div>
          </div>
          <div className="card-row">
            <div>
              <AiOutlineFieldTime style={{ color: "red" }} /> Waiting time :{" "}
              {waitingTime}{" "}
            </div>
          </div>
          <div className="card-row">
            <div>
              <GiMoneyStack style={{ color: "#0EB800" }} />
              Fees : {consultationFee}{" "}
            </div>
            <a
              href={`https://www.google.com/maps?q=${latitude},${longitude}`}
              target="_blank"
            >
              set my location
            </a>
          </div>
        </div>
        {/*  */}{" "}
        <div className="bookingBtnDiv">
          <button
            className="bookingBtn"
            value={id}
            onClick={(e) => {
              dispatch(setDoctor(e.target.value));
              history("/DoctorProfile");
              window.localStorage.setItem('doctorId',id);
            }}
          >
            Book Now !
          </button>
        </div>
      </div>
      <div className="card-Booking">
        {/* <button
          value={id}
          onClick={(e) => {
            dispatch(setDoctor(e.target.value));
            console.log(e.target.value);
            history("/DoctorProfile");
          }}
        >
          Book
        </button> */}
      </div>
    </div>
  );
};

export default CardDoctor;
