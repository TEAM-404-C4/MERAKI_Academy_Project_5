import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const GetCommentRate = () => {
  const [comments, setComments] = useState([]);
  //   ==================================================
  const state = useSelector((state) => {
    return {
      doctorId: state.doctorsReducer,
    };
  });
  // ====================================================
  useEffect(async () => {
    try {
      const res = await axios.post("http://localhost:5000/comment/", {
        doctorId: state.doctorId,
      });
      console.log(res);
      setComments(res.data.result);
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  return <div>{comments.map((element) => {})}</div>;
};

export default GetCommentRate;
