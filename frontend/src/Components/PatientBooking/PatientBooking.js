import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./PatientBooking.css";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

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
          doctorId:
            state.userId || window.localStorage.getItem("userIdForSettings"),
        }
      );
      console.log("state", window.localStorage.getItem("userId"));
      // console.log(res);
      // console.log(res.data.result);
      setAppointement(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  // =========================================

  const deleteBooking = async (e) => {
    console.log("is Running");
    try {
      const data = await e.target.id.split(",");
      const res = await axios.post(
        "http://localhost:5000/doctors/deletebooking",
        {
          doctorId:
            state.userId || window.localStorage.getItem("userIdForSettings"),
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
  console.log(appointement);
  // =======================================
  return (
    <div className="patientBookingMainDiv">
      {appointement.length === 0 ? (
        <h2 className="Check_Booking_DashBord">You Don't Have Any Bookings</h2>
      ) : (
        <table className="patientTableDashboardMainDiv">
          <tr className="patientTableDashboardTitle">
            <th className="titleNo">No.</th>
            <th className="title">FirstName</th>
            <th className="title">Last Name</th>
            <th className="title">Time</th>
            <th className="title">Date </th>
            <th className="title">Phone No </th>
            <th className="title">Delete </th>
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
                <td className="rowDelete">
                  <button
                    className="deleteButtons"
                    id={[
                      element.appointmentId,
                      element.dateAppointment,
                      element.patientId,
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
        </table>
      )}
    </div>
  );
}
