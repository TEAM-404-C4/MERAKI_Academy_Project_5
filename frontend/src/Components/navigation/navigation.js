//====================================================//Require
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsHouseFill, BsLockFill, BsNewspaper, BsWindow } from "react-icons/bs";
import { React, useEffect, useState } from "react";
import { logoutRedux } from "../Reducer/login/index";
import "./navigation.css";
import { useDispatch, useSelector } from "react-redux";
import { RiTruckFill, RiLogoutCircleRLine } from "react-icons/ri";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { MdOutlineEmergency } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import axios from "axios";

//====================================================// Navigation function

const Navigation = () => {
  console.log("from outside function ");
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
      profileImage: state.loginReducer.prsofileImage,
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
        setGetProfileImage(result.data.result[0].profileImage);
        setDoctorName(result.data.result[0].fullName);
      } else throw Error;
    } catch (error) {}
  };
  useEffect(() => {
    profileImage();
  }, [state.token]);

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

          <a href="tel:911" style={{ color: "red" }}>
          <div className="emergencyCallDiv">
            <div>
              <p className="emergencyCall">IN CASE OF EMERGENCY CLICK HERE</p>
            </div>
            <div
              
            >
              <RiTruckFill size={60} style={{ color: "red" }} />
            </div>
          </div>
          </a>
          
        </div>
        <div className="controlsDiv">
          {state.roleId == 2 || localStorage.getItem("roleId") == 2 ? (
            <div className="option1" title="Profile Page">
              <div className="ProfileImageDiv">
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
          <div className="option" title="Main">
            <Link to="/mainpage" alt="test">
              <BsHouseFill />
            </Link>
          </div>

          {state.roleId === 3 || localStorage.getItem("roleId") == 3 ? (
            <div className="option" title="Profile Page">
              <Link to="/patientprofile" alt="test">
                <BsFillCalendarWeekFill />
              </Link>
              <div></div>
              {/* <button
                onClick={() => {
                  history("/patientprofile");
                }}
              >
                patient profile
              </button> */}
            </div>
          ) : (
            <></>
          )}

          {state.roleId === 3 || localStorage.getItem("roleId") == 3 ? (
            <div className="option" title="setting Page">
              <Link to="/setting" alt="test">
                <FiSettings />
              </Link>
              <div></div>
            </div>
          ) : (
            <></>
          )}
          {state.roleId === 1 || localStorage.getItem("roleId") == 1 ? (
            <div className="option" title="setting Page">
              <Link to="/admin" alt="test">
                <FiSettings />
              </Link>
              <div></div>
            </div>
          ) : (
            <></>
          )}
          {/* for calling 911 */}
          {/* <div className="option" title="Calling 911">
            <a href="tel:911" style={{ color: "red" }}>
              <MdOutlineEmergency />
            </a>
          </div> */}

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
