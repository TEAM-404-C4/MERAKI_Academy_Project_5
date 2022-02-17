import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Patients.css";
import { useSelector } from "react-redux";
import { FcCancel } from "react-icons/fc";
export default function Patients() {
  const [AllPatients,setAllPatients]=useState([]);
const [message, setMessage]= useState("");

  const getAllPatients =async()=>{
   try {
    const res = await axios.get('http://localhost:5000/patients/all')
    if (res.data.success) {
      setAllPatients(res.data.patients);
    }
    else{
  setMessage(res.data.message);
    }
   } catch (error) {
     setMessage(error.message);
   }
  };
  const deletePatient = async(e)=>{
    try {
      const res = await axios.delete(`http://localhost:5000/patients/${e.target.id}`)
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
  console.log(AllPatients);
  useEffect(()=>{
    getAllPatients();
  },[]);
  return (
    <div>
      <div className="patient_Profile">
      
      <table className="patient_Table_Profile_Main_Div">
        <thead>
          <tr className="patient_Table_Profile_Title">
            <th className="titleNo_Profile">No.</th>
            <th className="title_Profile">First Name</th>
            <th className="title_Profile">Last Name</th>
            <th className="title_Profile">Gender</th>
            <th className="title_Profile">Phone</th>
            <th className="title_Profile">Actions</th>
          </tr>
        </thead>
       
        <tbody>
          {AllPatients.map((element, index) => {
            return (
              <tr className="patient_Table_Profile">
                <td className="rowNo_Profile">{index + 1}</td>

                <td className="row_Profile">{element.firstName}</td>
                <td className="row_Profile">{element.lastName}</td>
                <td className="row_Profile">{element.gender}</td>
                <td className="row_Profile">{element.phone}</td>
                

                <td>
                  <button
                    className="deleteButtons"
                    id={element.id}
                    onClick={deletePatient}
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
