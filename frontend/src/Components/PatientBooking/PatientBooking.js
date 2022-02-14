import React, { useState, useEffect } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

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
      {" "}
      <table>
        <tr>
          <th>FirstName</th>
          <th>Last Name</th>
          <th>Time</th>
          <th>Date </th>
          <th>Phone </th>
        </tr>

        {appointement.map((element, index) => {
          return (
            <tr>
              <td>{element.firstName}</td>
              <td>{element.lastName}</td>
              <td>{element.time}</td>
              <td>{element.dateAppointment}</td>
              <td>{element.phone}</td>
            </tr>
          );
        })}
        {console.log(appointement)}
      </table>
    </div>
  );
}
