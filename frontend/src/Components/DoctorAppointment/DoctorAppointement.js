import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DoctorAppointement = () => {
  const [appointementTime, setAppointementTime] = useState([]);
  const [patientPhone, setPatientPhone] = useState([]);
  const [patientFirstName, setPatientFirstName] = useState([]);
  const [patientLastName, setPatientLastName] = useState([]);
  //   ===================================================================

  const state = useSelector((state) => {
    return {
      doctorId: state.doctorsReducer,
      userId: state.loginReducer.userId,
      roleId: state.loginReducer.roleId,
    };
  });
  // =====================================================================
  useEffect(() => {
    getAppointement();
  }, []);

  const getAppointement = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/doctors/getappointement",
        {
          doctorId: state.doctorId,
        }
      );
      console.log(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {appointementTime.map((element, index) => {
        return (
          <div>
            <p> {element} </p>
            <p>{patientPhone[index]}</p>
            <p>{`${patientFirstName[index]}  ${patientLastName[index]} `}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorAppointement;
