//====================================================//Require

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./DoctorProfile.css";
import Swal from "sweetalert2";
import {
  FaRegMoneyBillAlt,
  FaHandHoldingMedical,
  FaPhoneAlt,
  FaBuilding,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrCertificate } from "react-icons/gr";
import { AiFillFlag, AiFillSafetyCertificate } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsClockHistory, BsCalendarDay } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { HiOutlineIdentification } from "react-icons/hi";
import CommentsAndRate from "../CommentsAndRate/CommentsAndRate";

//====================================================//COMPONENT

const DoctorProfile = () => {
  //====================================================//USESTATE

  const [doctor, setDoctor] = useState("");
  const [appointement, setAppointement] = useState([]);
  const [resultBooking, setResultBooking] = useState("");
  const [today, setToday] = useState("");
  const [date, setDate] = useState("");

  //====================================================//useNavigate

  const history = useNavigate();

  //====================================================//useSelector

  const state = useSelector((state) => {
    return {
      doctorId: state.doctorsReducer.doctorId,
      // userId: state.loginReducer.userId[0],
      userIdDoctor: state.loginReducer.userId,
      roleId: state.loginReducer.roleId,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  //====================================================//USEEFFECT

  useEffect(async () => {
    setToday(() => {
      return new Date().toISOString().substring(0, 10);
    });

    try {
      const res = await axios.get(
        `http://localhost:5000/doctors/${window.localStorage.getItem(
          "doctorId"
        )}`
      );
      setDoctor(res.data.result[0]);

      // ===================================================appointement

      const res2 = await axios.post(
        `http://localhost:5000/doctors/appointement`,
        {
          doctorId: state.doctorId,
          dateAppointment: date || new Date().toISOString().substring(0, 10),
        }
      );

      setAppointement(res2.data.result);
    } catch (err) {
      console.log(err);
    }
  }, [resultBooking, date]);

  // ==================================================// booking FUNCTION

  const booking = async (e) => {
    console.log(state.isLoggedIn);
    if (!state.isLoggedIn) {
      Swal.fire({
        title: "YOU HAVE TO LOGIN BEFORE BOOKING",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LOGIN",
      }).then((result) => {
        if (result.isConfirmed) {
          return history("/login");
        }
      });
    } else if (state.roleId == 2) {
      return;
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are You Sure To Book This Appoitment?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, book it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              const res = await axios.post(
                `http://localhost:5000/doctors/booking`,
                {
                  appointmentId: e.target.value,
                  patientId: window.localStorage.getItem("userIdForSettings"),
                  doctorId: window.localStorage.getItem("doctorId"),
                  dateAppointment: date || today,
                }
              );

              setResultBooking(res);
            } catch (err) {
              console.log(err);
            }

            swalWithBootstrapButtons.fire("BOOKIN!", "", "success");
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire("Cancelled", "", "error");
          }
        });
    }

    // try {
    //   const res = await axios.post(`http://localhost:5000/doctors/booking`, {
    //     appointmentId: e.target.value,
    //     patientId: window.localStorage.getItem("userIdForSettings"),
    //     doctorId: window.localStorage.getItem("doctorId"),
    //     dateAppointment: date || today,
    //   });

    //   setResultBooking(res);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  // ==================================================// set Date Appointement FUNCTION

  const setDateAppointement = (e) => {
    setDate(e.target.value.toString());
  };

  //====================================================//RETURN

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
              <IoLogoWhatsapp style={{ color: " #F4E6F2 " }} />
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
                  target="_blank"
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
                  target="_blank"
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
              <FaBuilding style={{ color: " #F4E6F2 " }} />
              <h5>
                  Department : <span>{doctor.Department}</span>
              </h5>
            </div>
            <div className="profile-row">
              <FaHandHoldingMedical style={{ color: " #F4E6F2 " }} /> 
              <h5>
                Specialization : <span>{doctor.specialization}</span>
              </h5>
            </div>
            <div className="profile-row">
              <AiFillSafetyCertificate style={{ color: " #F4E6F2 " }} b /> 
              <h5>
                Scientific Certificate : 
                <span>{doctor.ScientificCertificate}</span>{" "}
              </h5>
            </div>
            <div className="profile-row">
              <AiFillFlag style={{ color: " #F4E6F2 " }} /> 
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
              <FaPhoneAlt style={{ color: " #F4E6F2 " }} /> 
              <h5>
                Phone : <span>{doctor.phone}</span>
              </h5>
            </div>
            <div className="profile-row">
              <HiOutlineIdentification style={{ color: " #F4E6F2 " }} /> 
              <h5>
                Careers License : <span>{doctor.careersLicense}</span>{" "}
              </h5>
            </div>
            <div className="profile-row">
              <ImLocation style={{ color: " #F4E6F2 " }} /> 
              <h5>
                Address: 
                <span>
                  {doctor.city},{doctor.address}
                </span>
              </h5>
            </div>
            <div className="profile-row">
              <BsClockHistory style={{ color: " #F4E6F2 " }} /> 
              <h5>
                Waiting Time : <span>{doctor.waitingTime}</span>{" "}
              </h5>
            </div>
            <div className="profile-row">
              <BsCalendarDay style={{ color: " #F4E6F2 " }} /> 
              <h5>
                Working Days : <span>{doctor.workingDays}</span>{" "}
              </h5>
            </div>
            <div className="profile-row">
              <FaRegMoneyBillAlt style={{ color: " #F4E6F2 " }} /> 
              <h5>
                Consultation Fee : <span>{doctor.consultationFee}</span>{" "}
              </h5>
            </div>
          </div>
          <div className="appointement">
            <div className="setDateAppointment">
              <input
                className="datedate"
                type="date"
                onChange={setDateAppointement}
                defaultValue={new Date().toISOString().substring(0, 10)}
              />
            </div>

            <div className=" buttonsTimeAppointmentDiv ">
              {appointement.length == 0 && (
                <div className="SorryMessage">
                  <div>SORRY NO APPOINTMENTS AVAILABLE </div>
                </div>
              )}
              {appointement.map((element) => {
                return (
                  <button
                    className="buttonsTimeAppointment"
                    onClick={booking}
                    value={element.id}
                  >
                    {element.time}
                  </button>
                );
              })}
            </div>
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
