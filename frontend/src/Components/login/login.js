//====================================================//Require
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../Reducer/login/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//CSS File
import "./login.css";

//====================================================//Create Login Function
const Login = (e) => {
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
        setMessage("");
        history("/mainpage");

        dispatch(
          loginRedux({
            token: res.data.token,
            isLoggedIn: true,
            userId: res.data.userId,
            roleId: res.data.role,
          })
        );
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        setStatus(true);
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };
  //======================================================//UseEffect
  useEffect(() => {}, [message]);
  //======================================================//Return
  return (
    <>
      <div className="DoctorsImage"></div>
      <div className="loginDiv">
        <form onSubmit={checkUser} className="loginForm">
          <input
            type="number"
            className="phone"
            placeholder="Mobile Number"
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            type="password"
            className="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="loginButton"> Log in </button>
        </form>
        <div>
          {status ? message && <div className="Message">{message}</div> : <></>}
        </div>
      </div>
    </>
  );
};

export default Login;
