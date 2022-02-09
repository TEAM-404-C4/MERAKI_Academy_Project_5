import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DoctorAppointement = () => {
  const [appointement, setAppointement] = useState([]);
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
      setAppointement(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {appointement.map((element, index) => {
        return (
          <div>
            <p> {element.time} </p>
            <p>{element.phone}</p>
            <p>{`${element.firstName}  ${element.lastName} `}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DoctorAppointement;
