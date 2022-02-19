//====================================================//Require
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Patients.css";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

//====================================================//COMPONENT

export default function Patients() {
  //====================================================//USESTATE

  const [AllPatients, setAllPatients] = useState([]);
  const [message, setMessage] = useState("");
  const [render, setRender] = useState("");

  //====================================================//get All Patients FUNCTION

  const getAllPatients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/patients/all");
      if (res.data.success) {
        setAllPatients(res.data.patients);
      } else {
        setMessage(res.data.message);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  //====================================================//delete Patient FUNCTION

  const deletePatient = async (e) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/patients/${e.target.id}`
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
    getAllPatients();
  }, [render]);

  //====================================================// RETURN

  return (
    <div className="parentTablePatintsDiv">
      <div className="parentTablePatints">
        <table className="tablePatints">
          <thead>
            <tr className="trHeadPatints">
              <th className="thNOPatints">No.</th>
              <th className="thPatints">First Name</th>
              <th className="thPatints">Last Name</th>
              <th className="thPatints">Gender</th>
              <th className="thPatints">Phone</th>
              <th className="thPatints">Delete</th>
            </tr>
          </thead>

          <tbody>
            {AllPatients.map((element, index) => {
              return (
                <tr className="trBodyPatints">
                  <td className="tdNoPatints">{index + 1}</td>
                  <td className="tdPatints">{element.firstName}</td>
                  <td className="tdPatints">{element.lastName}</td>
                  <td className="tdPatints">{element.gender}</td>
                  <td className="tdPatints">{element.phone}</td>
                  <td className="tdPatints">
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
                            deletePatient(e);
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
