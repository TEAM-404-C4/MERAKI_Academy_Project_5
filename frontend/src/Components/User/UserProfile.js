import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProfile.css";
import { useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

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
          patientId:
            state[0].id || window.localStorage.getItem("userIdForSettings"),
          appointmentId: data[0],
          doctorId: data[2],
          dateAppointment: data[1],
        }
      );

      setDeleteBookingRes(res.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  // =====================================

  return (
    <div className="patient_Profile">
      {patientAppointment.length === 0 ? (
        <h2 className="Check_Booking_DashBord">You Don't Have Any Bookings</h2>
      ) : (
        <div className="patient_Table_Profile_Main_Div">
          <table>
            <thead>
              <tr className="patient_Table_Profile_Title">
                <th className="titleNo_Profile">No.</th>
                <th className="title_Profile">Doctor Name</th>
                <th className="title_Profile">Doctor Phone </th>
                <th className="title_Profile">Doctor Email</th>
                <th className="title_Profile">Doctor Address </th>
                <th className="title_Profile">Date Appointment </th>
                <th className="title_Profile">Time </th>
                <th className="title_Profile">Delete </th>
              </tr>
            </thead>

            <tbody>
              {patientAppointment.map((element, index) => {
                return (
                  <tr className="patient_Table_Profile">
                    <td className="rowNo_Profile">  {index + 1}</td>

                    <td className="row_Profile">{element["Doctor Name "]}</td>
                    <td className="row_Profile">
                      {element["Doctor Phone Number "]}
                    </td>
                    <td className="row_Profile">{element["Doctor Email  "]}</td>
                    <td className="row_Profile">
                      {element["Doctor Address "]}
                    </td>
                    <td className="row_Profile">
                      {element["Date Appointment  "]}
                    </td>
                    <td className="row_Profile">
                      {element["Appointment Time  "]}
                    </td>

                    <td className="rowDeletePatient">
                      <button
                        className="deleteButtons"
                        id={[
                          element.appointmentId,
                          element["Date Appointment  "],
                          element.doctorId,
                        ]}
                        onClick={(e) => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#DD1010",
                            cancelButtonColor: "#077D35",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteBooking(e);
                            }
                          });
                        }}
                      >
                        <BsTrash
                          className="delete"
                          size={25}
                          style={{ color: "red" }}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
