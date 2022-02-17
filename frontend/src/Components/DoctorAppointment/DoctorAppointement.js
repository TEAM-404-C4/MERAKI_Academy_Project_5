//====================================================//Require

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppointmentDoctor } from "../Reducer/Doctor/index";

//====================================================//COMPONENT

const DoctorAppointement = () => {
  //====================================================//USESTATE

  const [appointement, setAppointement] = useState([]);

  //====================================================//useDispatch

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      doctorId: state.doctorsReducer,
      userId: state.loginReducer.userId[0].id,
      roleId: state.loginReducer.roleId,
    };
  });

  //====================================================//USEEFFECT

  useEffect(() => {
    getAppointement();
  }, []);

  //====================================================//get Appointement FUNCTION

  const getAppointement = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/doctors/getappointement",
        {
          doctorId: state.userId,
        }
      );

      setAppointement(res.data.result);
      dispatch(setAppointmentDoctor(res.data.result));
    } catch (err) {
      console.log(err);
    }
  };

  return <div></div>;
};

export default DoctorAppointement;
