import React, { useState, useEffect } from "react";

import axios from "axios";
import { useSelector } from "react-redux";
import "./Dashboard.css";
import { AiOutlineRight, AiFillSetting } from "react-icons/ai";
import { GoDashboard } from "react-icons/go";
import { BsFillPeopleFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import FullCalender from "../FullCalender/FullCalender";
import Setting from "../Settings/Setting";
import Charts from "../Chart/Chart";
import PatientBooking from "../PatientBooking/PatientBooking";
import Appointement from "../DoctorAppointment/Appointement";

import 
const AdminDashbord=()=> {
  const [DoctorsPanel, setDoctorsPanel] = useState(false);
  const [patientsPanel, setPatientsPanel] = useState(false);
  const [FeedBackPanel, setFeedBackPanel] = useState(false);
  const [selectStyle1, setSelectStyle1] = useState("dashboardSelectAdminDashBord");
  const [selectStyle2, setSelectStyle2] = useState("dashboardSelectAdminDashBord");
  const [selectStyle3, setSelectStyle3] = useState("dashboardSelectAdminDashBord");
  const [selectStyle4, setSelectStyle4] = useState("dashboardSelectAdminDashBord");
  const [selectStyle5, setSelectStyle5] = useState("dashboardSelectAdminDashBord");
  const [appointement, setAppointement] = useState([]);
  return (
    <>
    <div className="MainDivDashBoardAdminDashBord">
        <div className="leftSideAdminDashBord">
          <div className="menuAdminDashBord">
            <div
              className={selectStyle1}
              onClick={() => {
                setDoctorsPanel(false);
                setPatientsPanel(false);
                setFeedBackPanel(false);
                setSelectStyle1("dashboardSelect2AdminDashBord");
                setSelectStyle2("dashboardSelectAdminDashBord");
                setSelectStyle3("dashboardSelectAdminDashBord");
                setSelectStyle4("dashboardSelectAdminDashBord");
                setSelectStyle5("dashboardSelectAdminDashBord");
              }}
            >
              <div className="dashboardIconAdminDashBord">
                <GoDashboard />
                Dashboard
              </div>
              <AiOutlineRight />
            </div>
            <div
              className={selectStyle2}
              onClick={() => {
                setDoctorsPanel(true);
                setPatientsPanel(false);
                setFeedBackPanel(false);
                setSelectStyle2("dashboardSelect2AdminDashBord");
                setSelectStyle1("dashboardSelectAdminDashBord");
                setSelectStyle3("dashboardSelectAdminDashBord");
                setSelectStyle4("dashboardSelectAdminDashBord");
                setSelectStyle5("dashboardSelectAdminDashBord");
              }}
            >
              <div className="dashboardIconAdminDashBord">
                <BsFillCalendarCheckFill />
                Doctors
              </div>
              <AiOutlineRight />
            </div>

            <div
              className={selectStyle3}
              onClick={() => {
                setDoctorsPanel(false);
                setPatientsPanel(true);
                setFeedBackPanel(false);

                setSelectStyle3("dashboardSelect2AdminDashBord");
                setSelectStyle1("dashboardSelectAdminDashBord");
                setSelectStyle2("dashboardSelectAdminDashBord");
                setSelectStyle4("dashboardSelectAdminDashBord");
                setSelectStyle5("dashboardSelectAdminDashBord");
              }}
            >
              <div className="dashboardIconAdminDashBord">
                <BsFillPeopleFill />
                Patients
              </div>
              <AiOutlineRight />
            </div>

            <div
              className={selectStyle4}
              onClick={() => {
                setDoctorsPanel(false);
                setPatientsPanel(false);
                setFeedBackPanel(true);
                setSelectStyle4("dashboardSelect2AdminDashBord");
                setSelectStyle1("dashboardSelectAdminDashBord");
                setSelectStyle2("dashboardSelectAdminDashBord");
                setSelectStyle3("dashboardSelectAdminDashBord");
                setSelectStyle5("dashboardSelectAdminDashBord");
              }}
            >
              <div className="dashboardIconAdminDashBord">
                <AiFillSetting />
                FeedBack
              </div>
              <AiOutlineRight />
            </div>
            <div
              className={selectStyle5}
              onClick={() => {
                setDoctorsPanel(false);
                setPatientsPanel(false);
                setFeedBackPanel(false);
                setratingPanel(true);
                setSelectStyle5("dashboardSelect2AdminDashBord");
                setSelectStyle1("dashboardSelectAdminDashBord");
                setSelectStyle2("dashboardSelectAdminDashBord");
                setSelectStyle3("dashboardSelectAdminDashBord");
                setSelectStyle4("dashboardSelectAdminDashBord");
              }}
            >
              
              
            </div>
          </div>
        </div>
        <div className="rightSideAdminDashBord">
          <div className="dashboardItemAdminDashBord">
            {dashboardPanel ? <Charts /> : <></>}

            {DoctorsPanel ? (
              <div>
                <div className="FullCalenderAdminDashBord">
                  <FullCalender />
                </div>
                {/* <Appointement /> */}

              </div>
            ) : (
              <></>
            )}
            {patientsPanel ? (
              <>
                <div className="dashBoardChartAdminDashBord">
                  <div className="chartOnePatientsAdminDashBord">
                    <PatientBooking />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {FeedBackPanel ? (
              <>
                <div className="dashBoardChartAdminDashBord">
                  <div>
                    <Setting />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            
          </div>
        </div>
      </div>
    </>
  )
}
// 



export default AdminDashbord;
