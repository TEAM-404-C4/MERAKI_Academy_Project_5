import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../Reducer/login/index";
import { useNavigate } from "react-router-dom";

import axios from "axios";

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

  //check User Function
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
      console.log(error);
      if (error.response && error.response.data) {
        setStatus(true);
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };
  // =================================================================
  useEffect(() => {}, [message]);

  return (
    <>
      <div>
        <form onSubmit={checkUser}>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button> Log in </button>
        </form>
        {status
          ? message && <div className="SuccessMessage">{message}</div>
          : message && <div className="ErrorMessage">{message}</div>}
      </div>
    </>
  );
};

export default Login;
