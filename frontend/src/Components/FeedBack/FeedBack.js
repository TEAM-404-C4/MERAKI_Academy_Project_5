import React, { useEffect, useState } from "react";

import axios from 'axios';
import './FeedBack.css';
export default function FeedBack() {
    const [Name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [Subject,setSubject] =useState("");
    const [Message,setMessage] =useState("");
    const [FeedBack,setFeedBack] =useState("");

  const [Resmessage, setResMessage] = useState("");

const GetFeedBack=async()=>{
    try {
        const res = await axios.get("http://localhost:5000/feedback");
        if(res.data.success){
            setResMessage(res.data.message);
setFeedBack(res.data.results);
console.log(FeedBack);    
        }
        else throw Error;
    } catch (error) {
        return setMessage(error.response.data.message);
    }
};
    const CreateFeedBack = async() => {
try {
    const res = await axios.post("http://localhost:5000/feedback",{fullName:Name,email:email,subject:Subject,message:Message});
    if(res.data.success){
        setResMessage(res.data.message);
    console.log(Resmessage)

    }
    else throw Error;
} catch (error) {
    return setMessage(error.response.data.message);
}
// setMessage("Error happened while Login, please try again");
    }
  return (
    <div className="FeedBack">
        <h2>Feedback</h2>

        <input type="text" className="FeedBackName" onChange={(e) =>{setName(e.target.value)}} placeholder="Name" />
        <input type="email" className="FeedBackEmail" onChange={(e) =>{setEmail(e.target.value)}} placeholder="email" />

        <input type="text" className="FeedBackSubject" onChange={(e) =>{setSubject(e.target.value)}} placeholder="Subject" />
        <textarea type="text" className="FeedBackMessage" onChange={(e) =>{setMessage(e.target.value)}} placeholder="Message"/>
<button className="FeedBackSubmit" onClick={CreateFeedBack}>Submit</button>
<button className="FeedBackSubmit" onClick={GetFeedBack}>Get Feedback</button>
    
    </div>
  )
}
