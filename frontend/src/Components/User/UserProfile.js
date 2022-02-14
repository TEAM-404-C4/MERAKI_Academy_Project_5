import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProfile.css";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const [patient, setpatient] = useState([]);
  const [patientAppointment, setpatientAppointment] = useState([]);

  // ==========================================

  const state = useSelector((state) => {
    return state.loginReducer.userId;
  });
  //   =====================================
  useEffect(async () => {
    try {
      console.log(state);

      const res = await axios.get(
        `http://localhost:5000/patients/${state[0].id}`
      );
      console.log("patient id", state, res);
      setpatient(res.data.result[0]);
      console.log("dd", res.data.result[0]);

      const res2 = await axios.post(
        `http://localhost:5000/doctors/getappointementpatient`,
        { patientId: state[0].id }
      );
      console.log(res2.data);
      console.log(Object.keys(res2.data.result[0]));
      console.log(res2.data.result[0]["Appointment Time  "]);
      setpatientAppointment(res2.data.result);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // =====================================

  return (
    // <div className="patientProfileMainDiv">
    //   <div>
    //     <h3>{`${patient.firstName}1-${patient.lastName}`}</h3>
    //     <p>{patient.phone}</p>
    //   </div>
<div className="patientBookingMainDiv">
<table className="patientTableDashboardMainDiv">
<thead>

<tr className="patientTableDashboardTitle">
          <th className="titleNo">No.</th>
          <th className="title">Doctor Name</th>
          <th className="title">Doctor Phone Number</th>
          <th className="title">Doctor Email</th>
          <th className="title">Doctor Address </th>
          <th className="title">Date Appointment </th>
          <th className="title">Date Appointment </th>

        </tr>
</thead>

<tbody>

        {patientAppointment.map((element,index) => {
          return (
            <tr className="patientTableDashboard">
              <td className="rowNo">{index + 1}</td>

              <td className="row">{element["Doctor Name "]}</td>
              <td className="row">{element["Doctor Phone Number "]}</td>
              <td className="row">{element["Doctor Email  "]}</td>
              <td className="row">{element["Doctor Address "]}</td>
              <td className="row">{element["Date Appointment  "]}</td>
              <td className="row">{element["Appointment Time  "]}</td>
            </tr>
          );
        })}
        </tbody>
</table>
</div>
  );
};

export default UserProfile;
