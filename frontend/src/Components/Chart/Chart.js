import React, { useState } from "react";
import "@fullcalendar/timegrid/main.css";  
import "@fullcalendar/daygrid/main.css";  

import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid"; 
import timeGridPlugin from "@fullcalendar/timegrid";   
import "./styleChart.css";
export default function Chart() {
  const [btnState,setBtnState]=useState();
  const events = [{ title: "Today", date: new Date() }]; 
  return (
    <div className="chart">
      <div className="container">  
                  <div className="row title" style={{ marginTop: "20px" }} >  
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
           right: "dayGridMonth,timeGridWeek,timeGridDay"  
        }}  
        plugins={[dayGridPlugin, timeGridPlugin]}  
        events={events}  
      />  
            </div>
      
    </div>
  );
}
