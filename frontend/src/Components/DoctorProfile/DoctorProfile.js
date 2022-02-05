//====================================================//Require
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";



const DoctorProfile = () => {

const [doctor, setDoctor] = useState("");



const state = useSelector((state)=>{

    return state.doctorsReducer
})
// ========================================



useEffect(async() => {
try{

    const res = await axios.get(`http://localhost:5000/doctors/${state}`)
    setDoctor(res.data.result[0])
}

  catch(err){

  }
}, []);



// ====================================



  return <div>

    <img src={doctor.profileImage} />
    <p>fullName{doctor.fullName} </p>
    <p>ScientificCertificate{doctor.ScientificCertificate} </p>
    <p>Nationality{doctor.Nationality} </p>
    <p>careersLicense{doctor.careersLicense} </p>
    <p>address{doctor.address} </p>
    <p>Department{doctor.Department} </p>
    <p>city{doctor.city} </p>

    <p>Name{doctor.Name} </p>
    <p>email{doctor.email} </p>
    <p>phone{doctor.phone} </p>
    <p>specialization{doctor.specialization} </p>
    <p>waitingTime{doctor.waitingTime} </p>
    <p>workingDays{doctor.workingDays} </p>
    <p>consultationFee{doctor.consultationFee} </p>




  </div>;


export default DoctorProfile;
