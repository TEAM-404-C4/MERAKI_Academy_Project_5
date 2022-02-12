import React, { useState, useEffect } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/daygrid/main.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
export default function FullCalender() {
  const [appointement, setAppointement] = useState([]);

    const state = useSelector((state) => {
        return {
          doctorId: state.doctorsReducer,
          userId: state.loginReducer.userId,
          roleId: state.loginReducer.roleId,
        };
      });
    useEffect(() => {
        getAppointement();
      }, []);
    const getAppointement = async () => {
        try {
          const res = await axios.post(
            "http://localhost:5000/doctors/getappointement",
            {
              doctorId: state.userId | window.localStorage.getItem('userId'),
            }
          );
          console.log(res);
          console.log(res.data.result);
          setAppointement(res.data.result);
        } catch (err) {
          console.log(err);
        }
      };

  const events = [{ title: "Today", date: new Date() }];
const handleDateClick=(dateClickInfo)=>{
  console.log(dateClickInfo);
}
const retrieveData = async(from,to,callback)=>{
callback()

}
const getData=(fetchInfo,callback)=>{
retrieveData(fetchInfo.start,fetchInfo.end,callback);
}
  return (
    <div>
      <div className="container">
        <div className="row title" style={{ marginTop: "20px" }}>
          <div class="col-sm-12 btn btn-info">
            FullCalendar In React Application
          </div>
        </div>
        <FullCalendar
          initialView= 'dayGridMonth'
          on
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          plugins={[dayGridPlugin, timeGridPlugin,interactionPlugin]}
          // events={events} onClick={(e) =>{console.log(e.target)}}
          dateClick={handleDateClick}
        />
      </div>
    </div>
  );
}
