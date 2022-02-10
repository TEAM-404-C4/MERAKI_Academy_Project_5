import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../Reducer/login/index";

const GoogleSignIn = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  // ===============================================
  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    console.log(googleData);

    axios
      .post("http://localhost:5000/patients/googlelogin", {
        firstName: googleData.profileObj.name,
        lastName: googleData.profileObj.familyName,
        phone: googleData.profileObj.email,
      })
      .then((res) => {
        console.log(res);
        dispatch(
          loginRedux({
            token: googleData.tokenId,
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
    <div>
      <GoogleLogin
        clientId={
          "385127554889-89cphe4mnke9uo9bgm1b3ii0crear6b8.apps.googleusercontent.com"
        }
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFaillure={handleFailure}
        cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
    </div>
  );
};

export default GoogleSignIn;
