import axios from "axios";
import React, { useState, useEffect } from "react";

const DoctorAppointement = () => {
  const [appointementTime, setAppointementTime] = useState([]);
  const [patientPhone, setPatientPhone] = useState([]);
  const [patientFirstName, setPatientFirstName] = useState([]);
  const [patientLastName, setPatientLastName] = useState([]);

  useEffect(() => {
    getAppointement();
  }, []);

  const getAppointement = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/doctors/getappointement"
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
