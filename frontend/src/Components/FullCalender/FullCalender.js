import React from "react";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/daygrid/main.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
export default function FullCalender() {
  const events = [{ title: "Today", date: new Date() }];

  return (
    <div>
      <div className="container">
        <div className="row title" style={{ marginTop: "20px" }}>
          <div class="col-sm-12 btn btn-info">
            FullCalendar In React Application
          </div>
        </div>
        <FullCalendar
          defaultView="timeGridDay"
          on
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          plugins={[dayGridPlugin, timeGridPlugin]}
          events={events}
        />
      </div>
    </div>
  );
}
