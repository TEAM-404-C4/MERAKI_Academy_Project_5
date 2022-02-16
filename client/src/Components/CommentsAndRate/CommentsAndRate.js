import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./CommentsAndRate.css";

export default function CommentsAndRate({ doctorFullName }) {
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
    console.log('line 32',"state", state);
    try {
      const res = await axios.post(`http://localhost:5000/comment/`, {
        doctorId: state.doctorId,
      });
      console.log('line 37',res.data.result ,state.doctorId);
      setComments(res.data.result);
    } catch (err) {
      console.log('err.response line 40',err.response);
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
        patientId: localStorage.getItem("userIdForSettings"),
        commentDate: new Date().toISOString().substring(0, 10),
      });
      setResponse(res);
      console.log('res',res);
      setComment("");
      setRate(0);
      setStar1(offStar);
      setStar2(offStar);
      setStar3(offStar);
      setStar4(offStar);
      setStar5(offStar);
    } catch (err) {
      const e= new Error(err.message)
      console.log('err.response',e);
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
    <div className="rateMainDiv">
      <>
        {state.roleId != 2 && (
          <form onSubmit={commentButton} className="rateCommentForm">
            <div className="rateInsideComments">
              {localStorage.getItem("roleId") == 3 ? (
                <>
                  <div className="starsPickerRate">
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
                  </div>

                  <input
                    className="commentRateInput"
                    placeholder={`Feel Free to review Dr. ${doctorFullName}`}
                    value={comment}
                    required
                    type="text"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  />
                </>
              ) : (
                <></>
              )}
            </div>

            <div className="buttonSubmitAndShowComment">
              {localStorage.getItem("roleId") == 3 ? (
                <>
                  <button type="submit" className="rateCommentButton">
                    Submit
                  </button>
                  <button
                    className="showReviewsBtn"
                    type="button"
                    onClick={showCommentButton}
                  >
                    Show Reviews
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </form>
        )}

        <div className="commentRatingBlock">
          {localStorage.getItem("roleId") == 2 ? (
            <button
              className="showReviewsBtn"
              type="button"
              onClick={showCommentButton}
            >
              Show Reviews
            </button>
          ) : (
            ""
          )}

          {showComments &&
            comments.map((element) => {
              return (
                <div className="commentRatingElement">
                  <div className="nameAndRating">
                    <div className="rating">
                      <div className="name">{`${element.firstName} ${element.lastName}`}</div>

                      <div className="date">{element.commentDate}</div>
                    </div>
                  </div>
                  <div className="rating">
                    <div className="comment">{element.comment}</div>
                    <div className="starts">{showRating(element.rating)}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    </div>
  );
}
