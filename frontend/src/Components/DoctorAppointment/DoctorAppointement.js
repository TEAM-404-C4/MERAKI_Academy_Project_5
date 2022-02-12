import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppointmentDoctor } from "../Reducer/Doctor/index";

const DoctorAppointement = () => {
  const [appointement, setAppointement] = useState([]);
  //   ===================================================================

  const dispatch = useDispatch();
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
          doctorId: state.userId,
        }
      );
      console.log(res.data.result);
      setAppointement(res.data.result);
      dispatch(setAppointmentDoctor(res.data.result));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* {appointement.map((element, index) => {
        return (
          <div>
            <p>
              {" "}
              {element.time} Date: {element.dateAppointment}{" "}
            </p>
            <p>{element.phone}</p>
            <p>{`${element.firstName}  ${element.lastName} `}</p>
          </div>
        );
      })} */}
    </div>
  );
};

export default DoctorAppointement;
