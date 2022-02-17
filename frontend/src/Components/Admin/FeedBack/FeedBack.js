import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeedBack.css";
import { useSelector } from "react-redux";
import { FcApproval , FcCancel } from "react-icons/fc";
export default function FeedBack() {
    const [AllFeedBack,setAllFeedBack]=useState([]);
    const [message, setMessage]= useState("");
    
      const getAllFeedBack =async()=>{
       try {
        const res = await axios.get('http://localhost:5000/feedback')
        if (res.data.success) {
          setAllFeedBack(res.data.results);
        }
        else{
      setMessage(res.data.message);
        }
       } catch (error) {
         setMessage(error.message);
       }
      };
      const ApproveFeedBack = async(e)=>{
        try {
          const res = await axios.put(`http://localhost:5000/feedback/approve/${e.target.id}`)
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
      const DeleteFeedBack = async(e)=>{
        try {
          const res = await axios.delete(`http://localhost:5000/feedback/${e.target.id}`)
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
      console.log(AllFeedBack);
      useEffect(()=>{
        getAllFeedBack();
      },[]);
      return (
        <div>
          <div className="parentTableFeedBack">
          
          <table className="tableFeedBack">
            <thead>
              <tr className="trHeadFeedBack">
                <th className="thNOFeedBack">No.</th>
                <th className="thFeedBack">Full Name</th>
                <th className="thFeedBack">Email</th>
                <th className="thFeedBack">Subject</th>
                <th className="thFeedBack">Message</th>
               
                <th className="thFeedBack">Actions</th>
              </tr>
            </thead>
           
            <tbody>
              {AllFeedBack.map((element, index) => {
                return (
                  <tr className="trBodyFeedBack">
                    <td className="tdNoFeedBack">{index + 1}</td>
                    <td className="tdFeedBack">{element.fullname}</td>
                    <td className="tdFeedBack">{element.email}</td>
                    <td className="tdFeedBack">{element.subject}</td>
                    <td className="tdFeedBack">{element.message}</td>
                    
                    
    
                    <td>
                      <div>
                      <button
                        className="deleteButtons"
                        id={element.id}
                        onClick={ApproveFeedBack}
                      >
                        <FcApproval className="delete" />
                      </button>
                      <button
                        className="deleteButtons"
                        id={element.id}
                        onClick={DeleteFeedBack}
                      >
                        <FcCancel className="delete" />
                      </button>
                      </div>
                      
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
