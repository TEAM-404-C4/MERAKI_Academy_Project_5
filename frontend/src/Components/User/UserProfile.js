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
    // console.log(state[0].id);
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
    <div className="patientProfileMainDiv">
      <div>
        <h3>{`${patient.firstName}-${patient.lastName}`}</h3>
        <p>{patient.phone}</p>
      </div>

      <div className="patientAppointement">
        {patientAppointment.map((element) => {
          return (
            <div className="patientAppointementMini">
              <p>Doctor Name: {element["Doctor Name "]}</p>
              <p>Doctor Phone Number: {element["Doctor Phone Number "]}</p>
              <p>Doctor Email: {element["Doctor Email  "]}</p>
              <p>Doctor Address: {element["Doctor Address "]}</p>
              <p>Date Appointment: {element["Date Appointment  "]}</p>
              <p>Appointment Time: {element["Appointment Time  "]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;
