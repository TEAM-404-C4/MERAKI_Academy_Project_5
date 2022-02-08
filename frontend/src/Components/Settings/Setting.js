import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { MdOutlinePassword } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Setting.css";
import { logoutRedux } from "../Reducer/login/index";

const Setting = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showchangePassowrd, setShowchangePassowrd] = useState(false);
  const [showChangePhone, setShowChangePhone] = useState(false);
  const [oldPhone, setOldPhone] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
    };
  });

  const logout = () => {
    let timerInterval;
    dispatch(logoutRedux());
    Swal.fire({
      title: "logged out please log back in",
      html: " I will close in <b></b> milliseconds.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        navigate("/mainpage");
      }
    });
  };

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        "http://localhost:5000/patients/changepassword",
        { oldPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (result.data.success) {
        const myTimeout = setTimeout(logout, 2000);
        Swal.fire({
          position: "center",
          icon: "success",
          title: result.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  // ====================================
  const changePhone = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(
        "http://localhost:5000/patients/changephone",
        {
          oldPhone,
          newPhone,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      if (result.data.success) {
        const myTimeout = setTimeout(logout, 2000);
        Swal.fire({
          position: "center",
          icon: "success",
          title: result.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  return (
    <>
      <div className="changeDiv">
        <div className="changePasswordDiv">
          <div>
            <button
              className="showPasswordbtn"
              onClick={() => {
                if (showchangePassowrd) {
                  setShowchangePassowrd(false);
                } else {
                  setShowchangePassowrd(true);
                }
              }}
            >
              <MdOutlinePassword />
            </button>
          </div>
          {showchangePassowrd ? (
            <div className="changePasswordForm">
              <form onSubmit={changePassword} className="cPasswordFrom">
                <input
                  type="password"
                  className="oldPassword"
                  placeholder="old Password"
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                />
                <input
                  type="password"
                  className="newPassword"
                  placeholder="new Password"
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
                <button className="savebtn" type="submit">
                  Save Changes
                </button>
              </form>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div>
          <div className="changePhoneDiv">
            <div>
              <button
                className="showPhonebtn"
                onClick={() => {
                  if (showChangePhone) {
                    setShowChangePhone(false);
                    console.log(false);
                  } else {
                    console.log(true);
                    setShowChangePhone(true);
                  }
                }}
              >
                <BsPhone />
              </button>
            </div>
            {showChangePhone ? (
              <div className="changePhoneForm">
                <form onSubmit={changePhone} className="cPhoneFrom">
                  <input
                    type="number"
                    className="oldPhone"
                    placeholder="old Phone Number"
                    onChange={(e) => {
                      setOldPhone(e.target.value);
                    }}
                  />
                  <input
                    type="number"
                    className="newPhone"
                    placeholder="new Phone Number"
                    onChange={(e) => {
                      setNewPhone(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    className="changePhonePassword"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <button className="savebtn" type="submit">
                    Save Changes
                  </button>
                </form>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Setting;
