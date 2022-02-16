import React, { useState, useEffect } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/daygrid/main.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import './FullCalender.css';
import Appointement from "../DoctorAppointment/Appointement"

export default function FullCalender() {
  const [appointement, setAppointement] = useState([]);
  const [dayAppointment, setDayAppointment] = useState("");

  // ===================================================
  const state = useSelector((state) => {
    return {
      doctorId: state.doctorsReducer,
      userId: state.loginReducer.userId[0].id,
      roleId: state.loginReducer.roleId,
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
          doctorId: state.userId | window.localStorage.getItem("userId"),
        }
      );
      console.log("state", state);
      console.log(res.data.result);
      setAppointement(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  // =====================================================

  const events = [{ title: "Today", date: new Date() }];

  // ====================================================

  const handleDateClick = (dateClickInfo) => {
    console.log(dateClickInfo.dateStr);
    console.log(state);
    setDayAppointment(dateClickInfo.dateStr);
  };

  const showDayAppointment = () => {
    let array =
      state.appointments &&
      state.appointments.filter((element) => {
        return dayAppointment == element.dateAppointment;
      });

    return array.map((element1,index) => {
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
    <div>
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
          onClick={(e) => {
            // console.log(e.target);
          }}
          dateClick={handleDateClick}
          cssClass="full"
        />
        </div>
        <div >

        {dayAppointment && (
        <div className="TableBooking">
        <Appointement />

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

          {showDayAppointment()}
        </tbody>

        </table>
        </div>
      )}
        </div>
      </div>
     
    </div>
  );
}
