import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {addInfoPage} from "../Reducer/DoctorRegister/index"


const Page1 = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    // =================================================

    const dispatch = useDispatch()
    const history=useNavigate()

    const nextButton = async ()=>{

       await dispatch(addInfoPage({fullName,email,password,image}))
        
       history("/doctorsignup2")

    }


  return <div>
<input placeholder='FULL NAME' type="text" className='fullNameDoctorRegister' onChange={(e)=>{
    setFullName(e.target.value)
}}/>
<input placeholder='EMAIL' type="email" className='emailDoctorRegister' onChange={(e)=>{
    setEmail(e.target.value)
}}/>
<input placeholder='PASSWORD' type="password" className='passwordDoctorRegister' onChange={(e)=>{

    setPassword(e.target.value)
}} />

<label for="image" >PROFILE IMAGE</label>
<input style={{display:"none"}}  type="file" className='profileImageDoctorRegister' id='image' onChange={(e)=>{
    setImage(e.target.value)
}}/>
<button onClick={nextButton}>NEXT</button>
  </div>;
};

export default Page1;
