//====================================================//Require

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Doctors.css";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

//====================================================//COMPONENT

export default function Doctors() {
  //====================================================//USESTATE

  const [AllDoctors, setAllDoctors] = useState([]);
  const [message, setMessage] = useState("");
  const [render, setRender] = useState("");

  //====================================================//get All Doctors FUNCTION
  const getAllDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/doctors/all");
      if (res.data.success) {
        setAllDoctors(res.data.results);
      } else {
        setMessage(res.data.message);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  //====================================================//delete Doctors FUNCTION

  const deleteDoctors = async (e) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/doctors/${e.target.id}`
      );
      if (res.data.success) {
        setMessage(res.data.message);
        setRender(res);
      } else {
        setMessage(res.data.message);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  //====================================================//USEEFFECT

  useEffect(() => {
    getAllDoctors();
  }, [render]);

  //====================================================//RETURN

  return (
    <div className="parentTableDoctorsDiv">
      <div className="parentTableDoctors">
        <table className="tableDoctors">
          <thead className="doctorTilteTableAdmin">
            <tr className="trHeadDoctors">
              <th className="thNODoctors">  No.</th>
              <th className="thDoctors">Full Name</th>
              <th className="thDoctors2">Email</th>
              <th className="thDoctors">Gender</th>
              <th className="thDoctors">Phone</th>
              <th className="thDoctors">Department</th>
              <th className="thDoctors">City</th>
              <th className="thDoctors">Delete</th>
            </tr>
          </thead>

          <tbody>
            {AllDoctors.map((element, index) => {
              return (
                <tr className="trBodyDoctors">
                  <td className="tdNoDoctors"> {index + 1}</td>

                  <td className="tdDoctors">{element.fullName}</td>
                  <td className="tdDoctors">{element.email}</td>
                  <td className="tdDoctors">{element.gender}</td>
                  <td className="tdDoctors">{element.phone}</td>
                  <td className="tdDoctors">{element.Department}</td>
                  <td className="tdDoctors">{element.city}</td>

                  <td className="tdDoctors">
                    <button
                      className="deleteButtons"
                      id={element.id}
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
                            deleteDoctors(e);
                          }
                        });
                      }}
                    >
                             
                      <BsTrash
                        className="delete"
                        size={25}
                        style={{ color: "red" }}
                        className="delete"
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
