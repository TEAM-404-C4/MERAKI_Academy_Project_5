//====================================================//Require
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  BsHouseFill,
  BsLockFill,
  BsNewspaper,
  BsBoxArrowInRight,
  BsWindow,
} from "react-icons/bs";
import { logoutRedux } from "../Reducer/login/index";
import "./navigation.css";
import { useDispatch, useSelector } from "react-redux";

import { RiLogoutCircleRLine } from "react-icons/ri";

//====================================================// Navigation function

const Navigation = () => {
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
  //====================================================// return

  return (
    <>
      <div className="navigation">
        <div className="logoAndName">
          <div
            className="logo"
            onClick={() => {
              history("/mainpage");
            }}
          ></div>
          <p className="shefaaName">SHEFAA</p>
        </div>
        <div className="controlsDiv">
          {state.roleId == 2 || localStorage.getItem("roleId") == 2 ? (
            <div className="option" title="Profile Page">
              <img
                onClick={() => {
                  history("/doctormyprfile");
                }}
                src={state.profileImage}
                alt="myProfile"
              />
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

          {state.roleId == 2 && localStorage.getItem("roleId") == 2 ? (
            <div className="option">
              <Link to="/appointement">
                <BsHouseFill />
              </Link>
            </div>
          ) : (
            <></>
          )}

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
