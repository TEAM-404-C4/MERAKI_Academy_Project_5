//====================================================//Require

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeedBack.css";
import { FcApproval, FcCancel } from "react-icons/fc";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

//====================================================//COMPONENT

export default function FeedBack() {
  //====================================================//USESTATE

  const [AllFeedBack, setAllFeedBack] = useState([]);
  const [message, setMessage] = useState("");
  const [render, setRender] = useState("");

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
        setRender(res);
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
        setRender(res);
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
  }, [render]);

  //====================================================//RETURN

  return (
    <div className="parentTablePatintsFeedbackDiv">
      <div className="parentTableFeedback">
        <table className="tableFeedback">
          <thead>
            <tr className="trHeadFeedback">
              <th className="thNOFeedback">No.</th>
              <th className="thFeedback">Full Name</th>
              <th className="thFeedback">Email</th>
              <th className="thFeedback">Subject</th>
              <th className="thFeedback">Message</th>
              <th className="thFeedback">Delete</th>
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
                  <td className="tdFeedBack">
                    <button
                      className="deleteButtons"
                      id={element.id}
                      onClick={(e) => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#DD1010",
                          cancelButtonColor: "#077D35",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            DeleteFeedBack(e);
                          }
                        });
                      }}
                    >
                                 
                      <BsTrash
                        className="delete"
                        size={25}
                        style={{ color: "red" }}
                        className="delete"
                      />
                    </button>

                    <button
                      className="deleteButtons"
                      id={element.id}
                      onClick={(e) => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You Want Approve  this Feedback !",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#DD1010",
                          cancelButtonColor: "#077D35",
                          confirmButtonText: "Yes, share it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            ApproveFeedBack(e);
                          }
                        });
                      }}
                    >
                                 
                      <FcApproval
                        className="delete"
                        size={25}
                        style={{ color: "red" }}
                        className="delete"
                      />
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
