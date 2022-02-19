//====================================================//Require

import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderOne from "react-slick";
import "./FeedBack.css";

//====================================================//COMPONENT

export default function SliderFeedBack() {
  //====================================================//USESTATE

  const [AllFeedBack, setAllFeedBack] = useState([]);
  const [message, setMessage] = useState("");

  //====================================================//get All Patients FUNCTION

  const getAllFeedBack = async () => {
    try {
      const res = await axios.get("http://localhost:5000/feedback/getapprove");
      if (res.data.success) {
        setAllFeedBack(res.data.results);
      } else {
        setMessage(res.data.message);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    lazyLoad: true,
  };

  //====================================================//USEEFFECT

  useEffect(() => {
    getAllFeedBack();
  }, []);

  //====================================================//feed backs

  let feed = AllFeedBack.map((element, index) => {
    return (
      <div className="feedbackCol">
        <div className="subjectDiv">{element.subject}</div>
        <div className="messageDiv">{element.message}</div>
      </div>
    );
  });

  //====================================================//RETURN

  return (
    <div className="feddbackDiv">
      <div className="feedbackRow">{feed}</div>
    </div>
  );
}
