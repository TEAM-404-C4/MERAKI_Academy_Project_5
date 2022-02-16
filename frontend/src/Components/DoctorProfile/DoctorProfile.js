//====================================================//Require

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DoctorProfile.css";
import {
  FaRegMoneyBillAlt,
  FaHandHoldingMedical,
  FaPhoneAlt,
  FaBuilding,
} from "react-icons/fa";

import { IoLogoWhatsapp } from "react-icons/io";

import { GrCertificate } from "react-icons/gr";
import { AiFillFlag } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsClockHistory, BsCalendarDay } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { HiOutlineIdentification } from "react-icons/hi";
import CommentsAndRate from "../CommentsAndRate/CommentsAndRate";
const DoctorProfile = () => {
  const [doctor, setDoctor] = useState("");
  const [appointement, setAppointement] = useState([]);
  const [resultBooking, setResultBooking] = useState("");
  const [today, setToday] = useState("");
  const [date, setDate] = useState("");

  const state = useSelector((state) => {
    return {
      doctorId: state.doctorsReducer.doctorId,
      userId: state.loginReducer.userId[0],
      userIdDoctor: state.loginReducer.userId,
      roleId: state.loginReducer.roleId,
    };
  });
  // ========================================

  useEffect(async () => {
    setToday(() => {
      return new Date().toISOString().substring(0, 10);
    });
    console.log(state.userId, state.roleId, state.userIdDoctor);
    console.log("state.doctorId", state.doctorId, state.doctorId.doctorId);
    try {
      const res = await axios.get(
        `http://localhost:5000/doctors/${window.localStorage.getItem(
          "doctorId"
        )}`
      );
      console.log("Doctor id", state.doctorId, res);
      setDoctor(res.data.result[0]);
      console.log("dd", res.data.result[0]);
      // ===================================================appointement
      console.log(today);
      const res2 = await axios.post(
        `http://localhost:5000/doctors/appointement`,
        {
          doctorId: state.doctorId,
          dateAppointment: date || new Date().toISOString().substring(0, 10),
        }
      );

      console.log(res2.data.result);
      setAppointement(res2.data.result);
    } catch (err) {
      console.log(err);
    }
  }, [resultBooking, date]);

  // ================================================== booking

  const booking = async (e) => {
    if (state.roleId == 2) {
      return;
    }

    try {
      const res = await axios.post(`http://localhost:5000/doctors/booking`, {
        appointmentId: e.target.value,
        patientId: state.userId.id,
        doctorId: state.doctorId,
        dateAppointment: date || today,
      });

      console.log(res);
      setResultBooking(res);
    } catch (err) {
      console.log(err);
    }
  };
  // ===================================== set date appointement

  const setDateAppointement = (e) => {
    setDate(e.target.value.toString());
    // console.log(e.target.value.toString());
  };

  // ====================================

  return (
    <div className="doctorProfileMainDiv">
      <div className="profile">
        <div className="pictureAndTitleMainDev">
          <div className="pictureAndTitle">
            <img src={doctor.profileImage} alt={doctor.fullName} />
            <div className="DoctorNameProfilePage">Dr.{doctor.fullName}</div>
          </div>
          <div className="chatWhatsApp">
            <div className="doctorWhatsApp">
              <IoLogoWhatsapp style={{ color: "#25D366" }} />
              <div className="doctorWhatsAppNumber">
                Chat
                <a
                  href={
                    "https://wa.me/+962" +
                    doctor.phone +
                    "/?text=Hello Dr." +
                    doctor.fullName +
                    " I'm From Shefaa, and I have some questions, please."
                  }
                >
                  {doctor.phone}
                </a>
              </div>
            </div>
            <div className="doctorEmailAndWhatsApp">
              <div>
                <MdAlternateEmail style={{ color: " #F4E6F2 " }} />
              </div>
              <div className="doctorEmail2">
                Email
                <a
                  href={
                    "https://mail.google.com/mail/?view=cm&source=mailto&to=[" +
                    doctor.email +
                    "]"
                  }
                >
                  {doctor.email}
                </a>
                 
              </div>
            </div>
          </div>
        </div>
        <div className="profileInformationDiv">
          <div className="profileInformation">
            <div className="profile-row">
              <FaBuilding style={{ color: "#91D1BD" }} />
              <h5>
                  Department : <span>{doctor.Department}</span>
              </h5>
            </div>
            <div className="profile-row">
              <FaHandHoldingMedical style={{ color: "#B600F2" }} /> 
              <h5>
                Specialization : <span>{doctor.specialization}</span>
              </h5>
            </div>
            <div className="profile-row">
              <GrCertificate /> 
              <h5>
                Scientific Certificate : 
                <span>{doctor.ScientificCertificate}</span>{" "}
              </h5>
            </div>
            <div className="profile-row">
              <AiFillFlag style={{ color: "#197500" }} /> 
              <h5>
                Nationality : <span>{doctor.Nationality}</span>
              </h5>
            </div>
            <div className="profile-row">
              <MdAlternateEmail style={{ color: " #F4E6F2 " }} /> 
              <h5>
                Email : <span>{doctor.email}</span>
              </h5>
            </div>
            <div className="profile-row">
              <FaPhoneAlt style={{ color: "#282727" }} /> 
              <h5>
                Phone : <span>{doctor.phone}</span>
              </h5>
            </div>
            <div className="profile-row">
              <HiOutlineIdentification style={{ color: " #F2C11D" }} /> 
              <h5>
                Careers License : <span>{doctor.careersLicense}</span>{" "}
              </h5>
            </div>
            <div className="profile-row">
              <ImLocation style={{ color: "#0d79e5" }} /> 
              <h5>
                Address: 
                <span>
                  {doctor.city},{doctor.address}
                </span>
              </h5>
            </div>
            <div className="profile-row">
              <BsClockHistory style={{ color: "red" }} /> 
              <h5>
                Waiting Time : <span>{doctor.waitingTime}</span>{" "}
              </h5>
            </div>
            <div className="profile-row">
              <BsCalendarDay style={{ color: "#F06292" }} /> 
              <h5>
                Working Days : <span>{doctor.workingDays}</span>{" "}
              </h5>
            </div>
            <div className="profile-row">
              <FaRegMoneyBillAlt style={{ color: "#0EB800" }} /> 
              <h5>
                Consultation Fee : <span>{doctor.consultationFee}</span>{" "}
              </h5>
            </div>
          </div>
          <div className="appointement">
            <input
              type="date"
              onChange={setDateAppointement}
              defaultValue={new Date().toISOString().substring(0, 10)}
            />

            {appointement.map((element) => {
              return (
                <>
                  <button onClick={booking} value={element.id}>
                    {element.time}
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="CommentsAndRate">
        <CommentsAndRate doctorFullName={doctor.fullName} />
      </div>
    </div>
  );
};
export default DoctorProfile;
