//====================================================//Require
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../Reducer/login/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleSignIn from "../GoogleLogin/googleLogin";
import Swal from "sweetalert2";
import Facebook from "../Facebook/Facebook"
//CSS File
import "./login.css";

//====================================================//Create Login Function

const Login = () => {
  const history = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  //======================================================//CheckUser Function
  const checkUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        phone,
        password,
      });
      if (res.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        history("/mainpage");

        dispatch(
          loginRedux({
            token: res.data.token,
            isLoggedIn: true,
            userId: res.data.userId,
            roleId: res.data.role,
            profileImage: res.data.profileImage,
          })
        );
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

        return;
      }
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Error happened while Login, please try again",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  //======================================================//UseEffect
  useEffect(() => {}, [message]);
  //======================================================//Return
  return (
    <div className="mainLoginDev">
      <div className="loginPageImage">
        <img src="https://s10.gifyu.com/images/Health-professional-team4e6b844e89762775.gif" />
      </div>
      <div className="loginDiv">
        <form onSubmit={checkUser} className="loginForm">
          <div className="loginInputDiv">
            <input
              type="number"
              className="loginInput"
              placeholder="Mobile Number"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <div className="loginPageicon"></div>
          </div>
          <div>
            <input
              type="password"
              className="loginInput"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="loginButtonDiv">
            <button className="loginButton"> Log in </button>
          </div>
          <div>
            <p className="or">
              ----------------------------- OR ----------------------------
            </p>
          </div>
          <div className="googleLogin">
            <GoogleSignIn />
            <Facebook/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
