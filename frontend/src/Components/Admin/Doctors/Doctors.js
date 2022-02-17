import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Doctors.css";
import { useSelector } from "react-redux";
import { FcCancel } from "react-icons/fc";
export default function Doctors() {
    const [AllDoctors,setAllDoctors]=useState([]);
const [message, setMessage]= useState("");

  const getAllDoctors =async()=>{
   try {
    const res = await axios.get('http://localhost:5000/doctors/all')
    if (res.data.success) {
      setAllDoctors(res.data.results);
    }
    else{
  setMessage(res.data.message);
    }
   } catch (error) {
     setMessage(error.message);
   }
  };
  const deleteDoctors = async(e)=>{
    try {
      const res = await axios.delete(`http://localhost:5000/doctors/${e.target.id}`)
      if (res.data.success) {
        setMessage(res.data.message);

      }
      else{
    setMessage(res.data.message);
      }
     } catch (error) {
        
       setMessage(error.message);
     }
  };
  console.log(AllDoctors);
  useEffect(()=>{
    getAllDoctors();
  },[]);
  return (
    <div>
      <div className="patient_Profile">
      
      <table className="patient_Table_Profile_Main_Div">
        <thead>
          <tr className="patient_Table_Profile_Title">
            <th className="titleNo_Profile">No.</th>
            <th className="title_Profile">Full Name</th>
            <th className="title_Profile">Email</th>
            <th className="title_Profile">Gender</th>
            <th className="title_Profile">Phone</th>
            <th className="title_Profile">Department</th>
            <th className="title_Profile">City</th>
            <th className="title_Profile">Actions</th>
          </tr>
        </thead>
       
        <tbody>
          {AllDoctors.map((element, index) => {
            return (
              <tr className="patient_Table_Profile">
                <td className="rowNo_Profile">{index + 1}</td>

                <td className="row_Profile">{element.fullName}</td>
                <td className="row_Profile">{element.email}</td>
                <td className="row_Profile">{element.gender}</td>
                <td className="row_Profile">{element.phone}</td>
                <td className="row_Profile">{element.Department}</td>
                <td className="row_Profile">{element.city}</td>
                

                <td>
                  <button
                    className="deleteButtons"
                    id={element.id}
                    onClick={deleteDoctors}
                  >
                    <FcCancel className="delete" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      

    </div>
    </div>
  )
}
