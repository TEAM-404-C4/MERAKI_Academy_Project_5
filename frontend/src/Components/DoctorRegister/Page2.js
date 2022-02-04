import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {addInfoPage} from "../Reducer/DoctorRegister/index"

const Page2 = () => {

    const [gender, setGender] = useState("MALE");
    const [Nationality, setNationality] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [phone, setPhone] = useState("");

    // =========================================
    const history=useNavigate()

    const dispatch = useDispatch()

    const nextButton = async ()=>{

       await dispatch(addInfoPage({gender,Nationality,specialization,phone}))
       history("/doctorsignup3")

    }


  return <div>

      <select className='genderDoctorRegister' onChange={(e)=>{
    setGender(e.target.value)
}} >

    <option value="MALE">MALE</option>
    <option value="FEMALE">FEMALE</option>

      </select>

<input placeholder='NATIONALITY' type="text" className='NationalityDoctorRegister' onChange={(e)=>{
    setNationality(e.target.value)
}}/>
<input placeholder='SPECIALIZATION' type="text" className='specializationDoctorRegister' onChange={(e)=>{

setSpecialization(e.target.value)
}} />

<input placeholder='PHONE' type="text" className='phoneDoctorRegister' onChange={(e)=>{
    setPhone("+962"+e.target.value)
}}/> <br />

<button className='backButton' onClick={()=>{

history("/doctorsignup1")

}}>BACK</button>
<button onClick={nextButton}>NEXT</button>

  </div>;
};

export default Page2;
