import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./PatientBooking.css";

export default function PatientBooking() {
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
          doctorId: state.userId | window.localStorage.getItem("userId"),
        }
      );
      console.log(res);
      console.log(res.data.result);
      setAppointement(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <table className="patientTableDashboardMainDiv">
        <tr className="patientTableDashboardTitle">
          <th className="title">FirstName</th>
          <th className="title">Last Name</th>
          <th className="title">Time</th>
          <th className="title">Date </th>
          <th className="title">Phone No </th>
        </tr>

        {appointement.map((element, index) => {
          return (
            <tr className="patientTableDashboard">
              <td className="row">{element.firstName}</td>
              <td className="row">{element.lastName}</td>
              <td className="row">{element.time}</td>
              <td className="row">{element.dateAppointment}</td>
              <td className="row">{element.phone}</td>
            </tr>
          );
        })}
        {console.log(appointement)}
      </table>
    </div>
  );
}
