import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProfile.css";
import { useSelector } from "react-redux";
import { FcCancel } from "react-icons/fc";
// ==============================================================
const UserProfile = () => {
  const [patient, setpatient] = useState([]);
  const [patientAppointment, setpatientAppointment] = useState([]);
  const [deleteBookingRes, setDeleteBookingRes] = useState("");

  // ==========================================

  const state = useSelector((state) => {
    return state.loginReducer.userId;
  });
  //   =====================================
  useEffect(async () => {
    try {
      console.log("state", state);

      const res = await axios.get(
        `http://localhost:5000/patients/${state[0].id}`
      );
      // console.log("patient id", state, res);
      setpatient(res.data.result[0]);
      console.log("dd", res.data.result[0]);

      const res2 = await axios.post(
        `http://localhost:5000/doctors/getappointementpatient`,
        { patientId: window.localStorage.getItem("userIdForSettings") }
      );
      console.log(window.localStorage.getItem("userIdForSettings"));
      console.log(res2.data);
      // console.log(res2.data.result[0]["Appointment Time  "]);
      setpatientAppointment(res2.data.result);
    } catch (err) {
      console.log(err);
    }
  }, [deleteBookingRes]);
  // =====================================

  useEffect(async () => {
    try {
      const res2 = await axios.post(
        `http://localhost:5000/doctors/getappointementpatient`,
        { patientId: window.localStorage.getItem("userIdForSettings") }
      );
      console.log(window.localStorage.getItem("userIdForSettings"));
      console.log(res2.data);
      // console.log(res2.data.result[0]["Appointment Time  "]);
      setpatientAppointment(res2.data.result);
    } catch (err) {
      console.log(err);
    }
  }, [deleteBookingRes]);

  // =========================================

  const deleteBooking = async (e) => {
    console.log("e.target.id", e.target.id);
    try {
      const data = await e.target.id.split(",");
      const res = await axios.post(
        "http://localhost:5000/doctors/deletebooking",
        {
          patientId: state[0].id | window.localStorage.getItem("userId"),
          appointmentId: data[0],
          doctorId: data[2],
          dateAppointment: data[1],
        }
      );
      // console.log(res);
      // console.log(res.data.result);
      setDeleteBookingRes(res.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  // =====================================

  return (
    // <div className="patientProfileMainDiv">
    //   <div>
    //     <h3>{`${patient.firstName}1-${patient.lastName}`}</h3>
    //     <p>{patient.phone}</p>
    //   </div>
    <div className="patient_Profile">
      {patientAppointment.length === 0 ? (
        <h2 className="Check_Booking_DashBord">You Don't Have Any Bookings</h2>
      ) : (
        <table className="patient_Table_Profile_Main_Div">
          <thead>
            <tr className="patient_Table_Profile_Title">
              <th className="titleNo_Profile">No.</th>
              <th className="title_Profile">Doctor Name</th>
              <th className="title_Profile">Doctor Phone Number</th>
              <th className="title_Profile">Doctor Email</th>
              <th className="title_Profile">Doctor Address </th>
              <th className="title_Profile">Date Appointment </th>
              <th className="title_Profile">Delete Booking </th>
            </tr>
          </thead>

          <tbody>
            {patientAppointment.map((element, index) => {
              return (
                <tr className="patient_Table_Profile">
                  <td className="rowNo_Profile">{index + 1}</td>

                  <td className="row_Profile">{element["Doctor Name "]}</td>
                  <td className="row_Profile">
                    {element["Doctor Phone Number "]}
                  </td>
                  <td className="row_Profile">{element["Doctor Email  "]}</td>
                  <td className="row_Profile">{element["Doctor Address "]}</td>
                  <td className="row_Profile">
                    {element["Date Appointment  "]}
                  </td>
                  <td className="row_Profile">
                    {element["Appointment Time  "]}
                  </td>

                  <td>
                    <button
                      className="deleteButtons"
                      id={[
                        element.appointmentId,
                        element["Date Appointment  "],
                        element.doctorId,
                      ]}
                      onClick={deleteBooking}
                    >
                      <FcCancel className="delete" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserProfile;
