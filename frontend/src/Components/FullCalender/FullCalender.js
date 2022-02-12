import React, { useState, useEffect } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/daygrid/main.css";
import Swal from "sweetalert2";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
export default function FullCalender() {
  
  const [month,setMonth]=useState('dayGridMonth');
  const [day,setDay]=useState("timeGridDay");
  const [week,setWeek]=useState("timeGridWeek");
  const [viewCalendar,setViewCalendar]=useState(month)
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

  // const events = {appointement}
const handleDateClick=(dateClickInfo)=>{
  // dateClickInfo.view.type="timeGridWeek";
  let dateClicked = dateClickInfo.dateStr;
  let a =appointement.filter(e=>e.dateAppointment===dateClicked)
  // if (!a.length) {
  //   return Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Something went wrong!',
  //     footer: '<a href="">Why do I have this issue?</a>'
  //   });
  // }
  // return Swal.fire({
  //   title: 'Sweet!',
  //   text: 'Modal with a custom image.',
  //   imageUrl: 'https://unsplash.it/400/200',
  //   imageWidth: 400,
  //   imageHeight: 200,
  //   imageAlt: 'Custom image',
  // })
  console.log(a)
  dateClickInfo.style={ color:"red"}
  // dateClickInfo.dayEl.id
// console.log()
dateClickInfo.dayEl.onClick=(e)=>{console.log(e)}
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
          initialView= {viewCalendar}
          on
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          plugins={[dayGridPlugin, timeGridPlugin,interactionPlugin]}
          events={handleDateClick} 
          dateClick={handleDateClick}
        />
      </div>
      <div>
        {/* ()
    {  Swal.fire({
  title: 'Sweet!',
  text: 'Modal with a custom image.',
  imageUrl: 'https://unsplash.it/400/200',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})} */}
      </div>
    </div>
  );
}
