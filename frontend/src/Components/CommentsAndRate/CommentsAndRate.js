import axios from "axios";
import React, { useState, useEffect } from "react";
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
  const [comments, setComments] = useState([]);
  const [showComments, setshowComments] = useState(false);
  const [response, setResponse] = useState("");
  // ====================================== state redux

  const state = useSelector((state) => {
    return {
      doctorId: state.doctorsReducer.doctorId,
      userId: state.loginReducer.userId[0],
      roleId: state.loginReducer.roleId,
    };
  });

  // ======================================

  useEffect(async () => {
    console.log("state", state);
    try {
      const res = await axios.post("http://localhost:5000/comment/", {
        doctorId: state.doctorId,
      });
      console.log(res.data.result);
      setComments(res.data.result);
    } catch (err) {
      console.log(err.response);
    }
  }, [showComments, response]);

  // ======================================== comment button toggle

  const commentButton = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/comment/create", {
        comment: comment,
        reating: rate,
        doctorId: state.doctorId,
        patientId: state.userId.id,
        commentDate: new Date().toISOString().substring(0, 10),
      });
      setResponse(res);
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
  // ==============================================

  const showCommentButton = () => {
    if (!showComments) {
      setshowComments(true);
    } else {
      setshowComments(false);
    }
  };
  //===============================

  const showRating = (rating) => {
    let stars = [];

    for (let i = 0; i < 5; i++) {
      if (rating > i) {
        stars.push(<span className="fa fa-star checked"></span>);
      } else {
        stars.push(<span className="fa fa-star"></span>);
      }
    }
    return stars;
  };

  // =======================================
  return (
    <div className="rate">
      <>
        {state.roleId != 2 && (
          <form onSubmit={commentButton}>
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
        )}

        <button onClick={showCommentButton}>Show Comments</button>
        <div className="commentRatingBlock">
          {showComments &&
            comments.map((element) => {
              return (
                <div className="commentRatingElement">
                  <div className="nameAndRating">
                    <div className="rating">
                      {showRating(element.rating)} <a>{element.commentDate}</a>{" "}
                    </div>
                    <div className="name">{`${element.firstName} ${element.lastName}`}</div>
                  </div>

                  <div className="comment">{element.comment}</div>
                </div>
              );
            })}
        </div>
      </>
    </div>
  );
}
