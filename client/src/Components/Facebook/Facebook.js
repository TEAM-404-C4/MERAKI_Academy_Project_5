import React from "react";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../Reducer/login/index";
import { BsFacebook } from "react-icons/bs";
import "./Facebook.css";
const Facebook = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const responseFacebook = (response) => {
    axios
      .post("http://localhost:5000/patients/googlelogin", {
        firstName: response.name,
        lastName: "",
        phone: response.email,
      })
      .then((res) => {
        console.log(res);
        dispatch(
          loginRedux({
            token: response.accessToken,
            isLoggedIn: true,
            userId: res.data.result,
            roleId: 3,
          })
        );
        history("/mainpage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="test">
      <FacebookLogin
        width="5"
        appId="1785113761689971"
        fields="name,email,picture"
        callback={responseFacebook}
        style="background-color: rgb(255, 255, 255)"
        icon={<BsFacebook size={40} />}
      />
    </div>
  );
};
export default Facebook;
