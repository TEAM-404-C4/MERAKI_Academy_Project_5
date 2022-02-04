import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {addInfoPage} from "../Reducer/DoctorRegister/index";
import { useDispatch,useSelector } from 'react-redux';


const Page4 = () => {


    const [consultationFee, setConsultationFee] = useState("");
    const [departmentDoctorRegister, setDepartmentDoctorRegister] = useState("");
    const [cityDoctorRegister, setCityDoctorRegister] = useState("");
    const [ScientificCertificateDoctorRegister, setScientificCertificateDoctorRegister] = useState("");

    // ========================================
    const state = useSelector((state)=>{
return state.doctorRegReducer
    })
    const dispatch = useDispatch()
    const history=useNavigate()
    const nextButton = async ()=>{

       await dispatch(addInfoPage({consultationFee,departmentDoctorRegister,cityDoctorRegister,roleId:2,ScientificCertificateDoctorRegister}))
        
        console.log(state);


    }


  return <div>

<input type="text" className='consultationFeeDoctorRegister'onChange={(e)=>{
    setConsultationFee(e.target.value)
}} />

<select className='departmentDoctorRegister' defaultValue={5} onChange={(e)=>{

setDepartmentDoctorRegister(e.target.value)
}} >

<option value="1">RADIOLOGY</option>
<option value="2">LABORATORY</option>
<option value="3">PHARMACY</option>
<option value="4">SURGICAL</option>
<option value="5">MEDICAL</option>
<option value="6">PEDIATRIC</option>
<option value="7">ORTHOPIDIC</option>
<option value="8">OPHTHALMOLOGY</option>
<option value="9">DEMATOLOGY</option>
<option value="10">OB&GYN</option>
<option value="11">DENTAL</option>
<option value="12">PHYSIOTHERAPY</option>
<option value="13">CARDIOLOGY</option>
<option value="14">PHYCHIATRIC</option>
<option value="15">NEUROLOGY</option>
<option value="16">GENERAL DOCTOR</option>

</select>


<select className='cityDoctorRegister' onChange={(e)=>{
    setCityDoctorRegister(e.target.value)
}}>
<option value="Amman">Amman</option>
<option value="IRBID">IRBID</option>
<option value="ZARQA">ZARQA</option>
<option value="MAFRAQ">MAFRAQ</option>
<option value="AJLOUN">AJLOUN</option>
<option value="JERASH">JERASH</option>
<option value="MADABA">MADABA</option>
<option value="BALQA">BALQA</option>
<option value="KARAK">KARAK</option>
<option value="TAFILEH">TAFILEH</option>
<option value="MAAN">MAAN</option>
<option value="AQABA">AQABA</option>


</select>
<input type="text" className='ScientificCertificateDoctorRegister' onChange={(e)=>{

setScientificCertificateDoctorRegister(e.target.value)
}} /> <br />

<button className='backButton' onClick={()=>{

history("/doctorsignup3")

}}>BACK</button>

<button onClick={nextButton}>SUBMIT</button>


  </div>;
};

export default Page4;
