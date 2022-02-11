import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const GetCommentRate = () => {
  const [comments, setComments] = useState("");
  //   ==================================================

  // ====================================================
  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:5000/comment/");
      console.log(res);
      setComments(res.data.result);
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  return <div></div>;
};

export default GetCommentRate;
