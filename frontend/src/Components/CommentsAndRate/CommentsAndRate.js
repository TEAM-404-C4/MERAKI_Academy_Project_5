import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styleRate.css";

export default function CommentsAndRate() {
  const [rate, setRate] = useState(0);
  const [onStar, onSetStar] = useState("fa fa-star checked");
  const [offStar, offSetStar] = useState("fa fa-star");
  const [star1, setStar1] = useState(offStar);
  const [star2, setStar2] = useState(offStar);
  const [star3, setStar3] = useState(offStar);
  const [star4, setStar4] = useState(offStar);
  const [star5, setStar5] = useState(offStar);
  const [comment, setComment] = useState("");

  // ====================================== state redux

  const state = useSelector((state) => {
    return {
      doctorId: state.doctorsReducer,
      userId: state.loginReducer.userId[0].id,
    };
  });
  // ======================================== comment button toggle

  const commentButtonToggle = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/comment/create", {
        comment: comment,
        reating: rate,
        doctorId: state.doctorId,
        patientId: state.userId,
      });

      console.log(res);
      setComment("");
      setRate(0);
      setStar1(offStar);
      setStar2(offStar);
      setStar3(offStar);
      setStar4(offStar);
      setStar5(offStar);
    } catch (err) {
      console.log(err.response);
    }
  };

  // =======================================
  return (
    <div className="rate">
      <>
        <form onSubmit={commentButtonToggle}>
          <span
            className={star1}
            id="1"
            onClick={(e) => {
              if (star1 === onStar) {
                setStar1(offStar);
                setStar2(offStar);
                setStar3(offStar);
                setStar4(offStar);
                setStar5(offStar);
                setRate(0);
              } else {
                setStar1(onStar);
                setRate(e.target.id);
              }
            }}
          ></span>
          <span
            className={star2}
            id="2"
            onClick={(e) => {
              if (star2 === onStar) {
                setStar1(offStar);
                setStar2(offStar);
                setStar3(offStar);
                setStar4(offStar);
                setStar5(offStar);
                setRate(0);
              } else {
                setStar1(onStar);
                setStar2(onStar);
                setRate(e.target.id);
              }
            }}
          ></span>
          <span
            className={star3}
            id="3"
            onClick={(e) => {
              if (star3 === onStar) {
                setStar1(offStar);
                setStar2(offStar);
                setStar3(offStar);
                setStar4(offStar);
                setStar5(offStar);
                setRate(0);
              } else {
                setStar1(onStar);
                setStar2(onStar);
                setStar3(onStar);
                setRate(e.target.id);
              }
            }}
          ></span>
          <span
            className={star4}
            id="4"
            onClick={(e) => {
              if (star4 === onStar) {
                setStar1(offStar);
                setStar2(offStar);
                setStar3(offStar);
                setStar4(offStar);
                setStar5(offStar);
                setRate(0);
              } else {
                setStar1(onStar);
                setStar2(onStar);
                setStar3(onStar);
                setStar4(onStar);
                setRate(e.target.id);
              }
            }}
          ></span>
          <span
            className={star5}
            id="5"
            onClick={(e) => {
              if (star5 === onStar) {
                setStar1(offStar);
                setStar2(offStar);
                setStar3(offStar);
                setStar4(offStar);
                setStar5(offStar);
                setRate(0);
              } else {
                setStar1(onStar);
                setStar2(onStar);
                setStar3(onStar);
                setStar4(onStar);
                setStar5(onStar);
                setRate(e.target.id);
              }
            }}
          ></span>
          <input
            value={comment}
            required
            type="text"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />

          <button type="submit">Comment</button>
        </form>
      </>
    </div>
  );
}
