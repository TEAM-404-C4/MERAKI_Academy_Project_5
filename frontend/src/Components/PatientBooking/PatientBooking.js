import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./PatientBooking.css";
import { FcCancel } from "react-icons/fc";

export default function PatientBooking() {
  const [appointement, setAppointement] = useState([]);
  const [deleteBookingRes, setDeleteBookingRes] = useState("");
  // ============================================
  const state = useSelector((state) => {
    return {
      doctorId: state.doctorsReducer,
      userId: state.loginReducer.userId[0].id,
      roleId: state.loginReducer.roleId,
    };
  });
  // ==============================================
  useEffect(() => {
    getAppointement();
  }, [deleteBookingRes]);
  // =========================================
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

  // =========================================

  const deleteBooking = async (e) => {
    try {
      const data = await e.target.id.split(",");
      const res = await axios.post(
        "http://localhost:5000/doctors/deletebooking",
        {
          doctorId: state.userId | window.localStorage.getItem("userId"),
          appointmentId: data[0],
          patientId: data[2],
          dateAppointment: data[1],
        }
      );
      console.log(res);
      console.log(res.data.result);
      setDeleteBookingRes(res.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  // =======================================
  return (
    <div className="patientBookingMainDiv">
      <table className="patientTableDashboardMainDiv">
        <tr className="patientTableDashboardTitle">
          <th className="titleNo">No.</th>
          <th className="title">FirstName</th>
          <th className="title">Last Name</th>
          <th className="title">Time</th>
          <th className="title">Date </th>
          <th className="title">Phone No </th>
          <th className="title">Delete Booking </th>
        </tr>
        {appointement.map((element, index) => {
          return (
            <tr className="patientTableDashboard">
              <td className="rowNo">{index + 1}</td>
              <td className="row">{element.firstName}</td>
              <td className="row">{element.lastName}</td>
              <td className="row">{element.time}</td>
              <td className="row">{element.dateAppointment}</td>
              <td className="row">{element.phone}</td>
              <td>
                <button
                  className="deleteButtons"
                  id={[
                    element.appointmentId,
                    element.dateAppointment,
                    element.patientId,
                  ]}
                  onClick={deleteBooking}
                >
                  <FcCancel className="delete" />
                </button>
              </td>
            </tr>
          );
        })}
        {console.log(appointement)}
      </table>
    </div>
  );
}
