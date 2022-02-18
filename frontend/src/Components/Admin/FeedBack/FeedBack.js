//====================================================//Require

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeedBack.css";
import { FcApproval, FcCancel } from "react-icons/fc";

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
        `http://localhost:5000/feedback/approve/${e.target.id}`
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

  //====================================================//Delete FeedBack FUNCTION

  const DeleteFeedBack = async (e) => {
    try {
      const res = await axios.delete(
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
  );
}
