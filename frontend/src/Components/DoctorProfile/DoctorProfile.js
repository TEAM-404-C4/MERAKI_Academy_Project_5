import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';


const DoctorProfile = () => {

const [doctor, setDoctor] = useState("");



const state = useSelector((state)=>{

    return state.doctorsReducer
})
// ========================================



useEffect(async() => {
try{

    const res = await axios.get(`http://localhost:5000/doctors/${state.doctorId}`)
    
    setDoctor(res.data.result[0])
    
}

  catch(err){

    console.log(err);
  }
}, []);



// ====================================



  return <div>

    




  </div>;
};

export default DoctorProfile;
