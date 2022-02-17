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
      <div className="parentTablePatints">
      
      <table className="tablePatints">
        <thead>
          <tr className="trHeadPatints">
            <th className="thNOPatints">No.</th>
            <th className="thPatints">First Name</th>
            <th className="thPatints">Last Name</th>
            <th className="thPatints">Gender</th>
            <th className="thPatints">Phone</th>
            <th className="thPatints">Actions</th>
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
