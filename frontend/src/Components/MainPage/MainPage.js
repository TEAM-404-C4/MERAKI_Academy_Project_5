import React ,{ useState, useEffect } from 'react';
import CardDoctor from './CardDoctor';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setDoctors} from '../Reducer/Doctor/index'

export default function MainPage() {

const dispatch = useDispatch();
const [message, setMessage] = useState("");

const state = useSelector((state) => {
  return {
    doctors: state.doctorsReducer.doctors,
    user: state.loginReducer
  }
});
const getAllDoctors= async ()=>{
  try {
    const res = await axios.get("http://localhost:5000/doctors", {
      headers: {
        Authorization: `Bearer ${state.user.token}`,
      },
    });
    if (res.data.success) {
      dispatch(setDoctors(res.data.results));
      setMessage("");
    } else throw Error;
  } catch (error) {
    if (!error.response.data.success) {
      return setMessage(error.response.data.message);
    }
    setMessage("Error happened while Get Data, please try again");
  }
}
let doctorCard=state.doctors.map((card)=>{
  return <CardDoctor />
})
  return <div>
<CardDoctor/>
  </div>;
}
