import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  FaRegMoneyBillAlt,
  FaHandHoldingMedical,
  FaPhoneAlt,
} from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { AiFillFlag } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { BsClockHistory, BsCalendarDay } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { HiOutlineIdentification } from "react-icons/hi";

const DoctorMyProfile = () => {
  const [doctor, setDoctor] = useState([]);

  // =============================
  const state = useSelector((state) => {
    return state.loginReducer.userId;
  });

  // =================================
  useEffect(async () => {
    const userId = state || localStorage.getItem("userId");
    try {
      const res = await axios.get(`/doctors/${userId}`);
      setDoctor(res.data.result[0]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <div className="pictureAndTitle">
        <div>
          <img src={doctor.profileImage} alt={doctor.fullName} />
        </div>
        <div>
          <h3>Dr.{doctor.fullName}</h3>
        </div>
      </div>
      <div className="profileInformation">
        <h5>
          Department : <span>{doctor.Department}</span>
        </h5>
        <div className="profile-row">
          <FaHandHoldingMedical />
          <h5>
            specialization : <span>{doctor.specialization}</span>
          </h5>
        </div>
        <div className="profile-row">
          <GrCertificate />
          <h5>
            Scientific Certificate :<span>{doctor.ScientificCertificate}</span>{" "}
          </h5>
        </div>
        <div className="profile-row">
          <AiFillFlag />
          <h5>
            Nationality :<span>{doctor.Nationality}</span>
          </h5>
        </div>
        <div className="profile-row">
          <MdAlternateEmail />
          <h5>
            Email :<span>{doctor.email}</span>
          </h5>
        </div>
        <div className="profile-row">
          <FaPhoneAlt />
          <h5>
            {" "}
            Phone : <span>{doctor.phone}</span>
          </h5>
        </div>
        <div className="profile-row">
          <HiOutlineIdentification />
          <h5>
            careers License :<span>{doctor.careersLicense}</span>{" "}
          </h5>
        </div>
        <div className="profile-row">
          <ImLocation />
          <h5>
            Address:
            <span>
              {doctor.city},{doctor.address}
            </span>
          </h5>
        </div>
        <div className="profile-row">
          <BsClockHistory />
          <h5>
            waiting Time : <span>{doctor.waitingTime}</span>
          </h5>
        </div>
        <div className="profile-row">
          <BsCalendarDay />
          <h5>
            Days :<span>{doctor.workingDays}</span>
          </h5>
        </div>
        <div className="profile-row">
          <FaRegMoneyBillAlt />
          <h5>
            Consultation Fee : <span>{doctor.consultationFee}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DoctorMyProfile;
