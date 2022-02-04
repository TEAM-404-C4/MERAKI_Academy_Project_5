import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {addInfoPage} from "../Reducer/DoctorRegister/index"

const Page3 = () => {


    const [workingDays, setWorkingDays] = useState("");
    const [address, setAddress] = useState("");
    const [careersLicense, setCareersLicense] = useState("");
    const [waitingTime, setWaitingTime] = useState("");

    // =========================================
    
    const dispatch = useDispatch()
    const history=useNavigate()

    const nextButton = async()=>{

       await dispatch(addInfoPage({workingDays,address,careersLicense,waitingTime}))
       history("/doctorsignup4")

    }

  return <div>

<input placeholder='WORKING DAYS' type="text" className='workingDaysDoctorRegister' onChange={(e)=>{
    setWorkingDays(e.target.value)
}}/>
<input placeholder='ADDRESS' type="text" className='addressDoctorRegister' onChange={(e)=>{
    setAddress(e.target.value)
}}/>
<input placeholder='CAREERS LICENSE' type="text" className='careersLicenseDoctorRegister' onChange={(e)=>{

setCareersLicense(e.target.value)
}} />
<input placeholder='WATING TIME' type="text" className='waitingTimeDoctorRegister' onChange={(e)=>{
    setWaitingTime(e.target.value)
}}/> <br />

<button className='backButton' onClick={()=>{

history("/doctorsignup2")

}}>BACK</button>
<button onClick={nextButton}>NEXT</button>


  </div>;
};

export default Page3;
