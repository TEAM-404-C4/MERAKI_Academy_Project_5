import React, { useState, useEffect } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/daygrid/main.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./FullCalender.css";
import Appointement from "../DoctorAppointment/Appointement";
import { AiFillCarryOut } from "react-icons/ai";

export default function FullCalender() {
  const [appointement, setAppointement] = useState([]);
  const [dayAppointment, setDayAppointment] = useState("");

  // ===================================================
  const state = useSelector((state) => {
    return {
      doctorId: state.doctorsReducer,
      userId:
        state.loginReducer.userId[0].id ||
        window.localStorage.getItem("userIdForSettings"),
      roleId:
        state.loginReducer.roleId || window.localStorage.getItem("roleId"),
      appointments: state.doctorsReducer.appointment,
    };
  });
  //======================================================
  useEffect(() => {
    getAppointement();
  }, []);
  const getAppointement = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/doctors/getappointement",
        {
          doctorId:
            state.userId || window.localStorage.getItem("userIdForSettings"),
        }
      );
      console.log("state", state);
      console.log(res.data.result);
      setAppointement(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("----------------", state);

  // =====================================================

  const events = [{ title: "Today", date: new Date() }];

  // ====================================================

  const handleDateClick = (dateClickInfo) => {
    setDayAppointment(dateClickInfo.dateStr);
  };

  const showDayAppointment = () => {
    let array =
      appointement &&
      appointement.filter((element) => {
        return dayAppointment == element.dateAppointment;
      });

    return array.map((element1, index) => {
      return (
        <tr className="patient_Table_Appointment_title">
          <td className="rowNo_Appointment">{index + 1}</td>
          <td className="row_Appointment">{`${element1.firstName}  ${element1.lastName} `}</td>
          <td className="row_Appointment">{element1.time}</td>
          <td className="row_Appointment"> {element1.phone}</td>
        </tr>
      );
    });
  };

  // =========================================
  const retrieveData = async (from, to, callback) => {
    callback();
  };
  // ==================================
  const getData = (fetchInfo, callback) => {
    retrieveData(fetchInfo.start, fetchInfo.end, callback);
  };
  // ============================================
  return (
    <div className="containerDiv">
      <div className="container">
        <div className="calendar">
          <FullCalendar
            initialView="dayGridMonth"
            on
            header={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={events}
            onClick={(e) => {}}
            dateClick={handleDateClick}
            cssClass="full"
          />
        </div>
        <div></div>
        <div className="TableBooking">
          {/* <Appointement /> */}
          <div className="AppointementTablePerDay">
            Appointement Table - {dayAppointment || "Pick Date"}{" "}
            <div>
              <AiFillCarryOut size={20} />
            </div>
          </div>
          <table className="patient_Table_Appointment">
            <thead>
              <tr className="patient_Table_Appointment_title">
                <th className="titleNo_Appointment">No.</th>
                <th className="title_Appointment">FullName</th>
                <th className="title_Appointment">Time</th>
                <th className="title_Appointment">Phone</th>
              </tr>
            </thead>
            <tbody>
              {showDayAppointment().length ? (
                showDayAppointment()
              ) : (
                <div>
                  <div className="noAppointmen">No Appointment in This Day</div>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
