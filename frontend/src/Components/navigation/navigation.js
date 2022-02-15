//====================================================//Require
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsHouseFill, BsLockFill, BsNewspaper, BsWindow } from "react-icons/bs";
import { React, useEffect, useState } from "react";

import { logoutRedux } from "../Reducer/login/index";
import "./navigation.css";
import { useDispatch, useSelector } from "react-redux";
import { RiLogoutCircleRLine } from "react-icons/ri";
import axios from "axios";

//====================================================// Navigation function

const Navigation = () => {
  const [getProfileImage, setGetProfileImage] = useState(
    "https://i.ibb.co/5YV7j9Z/Male-doctor-with-stethoscope-avatar-Health-care-services-concept-Vector-illustration.jpg"
  );
  const [doctorName, setDoctorName] = useState("");
  const history = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
      roleId: state.loginReducer.roleId,
      profileImage: state.loginReducer.profileImage,
    };
  });
  //====================================================// Profile image

  const profileImage = async () => {
    try {
      const result = await axios.post(
        "http://localhost:5000/doctors/profileimage",
        {},
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (result.data.success) {
        console.log(
          "*****************************",
          result.data.result[0].profileImage
        );
        setGetProfileImage(
          result.data.result[0].profileImage ||
            "https://i.ibb.co/5YV7j9Z/Male-doctor-with-stethoscope-avatar-Health-care-services-concept-Vector-illustration.jpg"
        );
        setDoctorName(result.data.result[0].fullName);
      } else throw Error;
    } catch (error) {}
  };
  useEffect(() => {
    profileImage();
  }, [doctorName, getProfileImage]);

  //====================================================// return

  return (
    <>
      <div className="navigation">
        <div
          className="logoAndName"
          onClick={() => {
            history("/");
          }}
        >
          <div className="logo"></div>
          <div>
            <p className="shefaaName">SHEFAA</p>
          </div>
        </div>
        <div className="controlsDiv">
          {state.roleId == 2 || localStorage.getItem("roleId") == 2 ? (
            <div className="option1" title="Profile Page">
              <div className="ProfileImageDiv">
                {console.log("------------------", getProfileImage)}
                <img
                  className="profileImg"
                  src={getProfileImage || state.profileImage}
                  alt="myProfile"
                />
              </div>
              <div className="drName">Dr.{doctorName.toUpperCase()}</div>
            </div>
          ) : (
            <></>
          )}

          {state.roleId === 3 || localStorage.getItem("roleId") == 3 ? (
            <div className="option" title="Profile Page">
              <button
                onClick={() => {
                  history("/patientprofile");
                }}
              >
                patient profile
              </button>
            </div>
          ) : (
            <></>
          )}

          <div className="option" title="Main">
            <Link to="/mainpage" alt="test">
              <BsHouseFill />
            </Link>
          </div>

          {/* {state.roleId == 2 && localStorage.getItem("roleId") == 2 ? (
            <div className="option">
              <Link to="/appointement">
                <BsHouseFill />
              </Link>
            </div>
          ) : (
            <></>
          )} */}

          {!state.isLoggedIn ? (
            <div className="option" title="Login">
              <Link to="/login">
                <BsLockFill />
              </Link>
            </div>
          ) : (
            <></>
          )}

          {!state.isLoggedIn ? (
            <div className="option">
              <Link to="/Register" title="Register">
                <BsNewspaper />
              </Link>
            </div>
          ) : (
            <></>
          )}

          {state.roleId == 2 || localStorage.getItem("roleId") == 2 ? (
            <div className="option" title="Dashboard">
              <Link to="/dashboard">
                <BsWindow />
              </Link>
            </div>
          ) : (
            <></>
          )}

          {state.isLoggedIn ? (
            <div
              className="option"
              onClick={() => {
                dispatch(logoutRedux());
              }}
            >
              <Link to="/">
                <RiLogoutCircleRLine />
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
