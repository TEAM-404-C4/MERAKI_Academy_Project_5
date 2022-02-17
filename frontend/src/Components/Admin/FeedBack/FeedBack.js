//====================================================//Require

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeedBack.css";
import { FcApproval } from "react-icons/fc";

//====================================================//COMPONENT

export default function FeedBack() {
  //====================================================//USESTATE

  const [AllFeedBack, setAllFeedBack] = useState([]);
  const [message, setMessage] = useState("");

  //====================================================//get All FeedBack FUNCTION

  const getAllFeedBack = async () => {
    try {
      const res = await axios.get("http://localhost:5000/feedback");
      if (res.data.success) {
        setAllFeedBack(res.data.results);
      } else {
        setMessage(res.data.message);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  //====================================================//Approve FeedBack FUNCTION

  const ApproveFeedBack = async (e) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/feedback/${e.target.id}`
      );
      if (res.data.success) {
        setMessage(res.data.message);
      } else {
        setMessage(res.data.message);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };
  //====================================================//USEEFFECT

  useEffect(() => {
    getAllFeedBack();
  }, []);

  //====================================================//RETURN
  return (
    <div>
      <div className="patient_Profile">
        <table className="patient_Table_Profile_Main_Div">
          <thead>
            <tr className="patient_Table_Profile_Title">
              <th className="titleNo_Profile">No.</th>
              <th className="title_Profile">Full Name</th>
              <th className="title_Profile">Email</th>
              <th className="title_Profile">Subject</th>
              <th className="title_Profile">Message</th>

              <th className="title_Profile">Actions</th>
            </tr>
          </thead>

          <tbody>
            {AllFeedBack.map((element, index) => {
              return (
                <tr className="patient_Table_Profile">
                  <td className="rowNo_Profile">{index + 1}</td>
                  <td className="row_Profile">{element.fullname}</td>
                  <td className="row_Profile">{element.email}</td>
                  <td className="row_Profile">{element.subject}</td>
                  <td className="row_Profile">{element.message}</td>

                  <td>
                    <button
                      className="deleteButtons"
                      id={element.id}
                      onClick={ApproveFeedBack}
                    >
                      <FcApproval className="delete" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
