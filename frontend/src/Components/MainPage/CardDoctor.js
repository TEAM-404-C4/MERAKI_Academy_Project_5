//====================================================//Require
import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { MdOutlineAttachMoney, MdOutlineStarRate } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";

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
  // ===================================================

  const [comments, setComments] = useState([]);
  const [realRating, setRealRating] = useState("");

  // ===================================================

  const history = useNavigate();
  const dispatch = useDispatch();

  // ===================================================

  useEffect(async () => {
    try {
      const res = await axios.post("http://localhost:5000/comment/", {
        doctorId: id,
      });
      console.log(res.data.result);
      setComments(res.data.result);
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  // =====================================================

  let ratingConst = [0, 1, 2, 3, 4, 5];

  let ratingGroup = ratingConst.map((element) => {
    let group = 0;
    comments.forEach((element1) => {
      if (element1.rating == element) {
        group++;
      }
    });
    return group * element;
  });
  console.log("ratingGroup", ratingGroup);

  const average = (ratingGroup) =>
    ratingGroup.reduce((a, b) => a + b, 0) / comments.length;

  console.log(average(ratingGroup));
  // setRealRating(average(ratingGroup));

  const ratingCard = () => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      if (i < Math.round(average(ratingGroup))) {
        stars = stars + "⭐";
      } else {
        stars = stars + "✰";
      }
    }

    return (
      stars &&
      stars.split("").map((element) => {
        if (element == "✰") {
          return <span className="fa fa-star"></span>;
        } else {
          return <span className="fa fa-star checked"></span>;
        }
      })
    );
  };
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

        <div className="cardInformation">
          <div
            className="doctorNameDiv"
            onClick={() => {
              dispatch(setDoctor(id));
              history("/DoctorProfile");
            }}
          >
            <div className="DoctorName">Doctor</div>. {fullName}
          </div>
          <div className="card-row">
            <MdOutlineStarRate />
               
            {comments.length ? (
              <div className="filledStars">
                {ratingCard()}  
                {average(ratingGroup).toFixed(2)}
              </div>
            ) : (
              <>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </>
            )}
          </div>

          <div className="card-row">
            <FaUserMd style={{ color: "#91D1BD" }} />
               {Department} specialized in {specialization}
          </div>
          {/* <div className="card-row">
             <div>
              <GrCertificate />   Scientific Certificate :{" "}
              {ScientificCertificate}
            </div> 
          </div> */}
          {/* <div className="card-row">
            <div>
              <HiLocationMarker style={{ color: "#0d79e5" }} />
                 Location : {city},{address}
            </div>
          </div> */}
          {/* <div className="card-row">
             <div>
              <AiOutlineFieldTime style={{ color: "red" }} />   Waiting time :
              {waitingTime}
            </div>
          </div> */}
          <div className="card-row">
            <div>
              <GiMoneyStack style={{ color: "#0EB800" }} />
                 Fees : {consultationFee}
            </div>
          </div>
          <div className="card-row">
            <a
              href={`https://www.google.com/maps?q=${latitude},${longitude}`}
              target="_blank"
            >
              <HiLocationMarker style={{ color: "#0d79e5" }} />
                {city},{address}
            </a>
          </div>
          <div className="card-row">
            <button
              className="bookingBtn"
              value={id}
              onClick={(e) => {
                dispatch(setDoctor(e.target.value));
                history("/DoctorProfile");
                window.localStorage.setItem("doctorId", id);
              }}
            >
              Details
            </button>
          </div>
        </div>
      </div>
      <div className="card-Booking"></div>
    </div>
  );
};

export default CardDoctor;
