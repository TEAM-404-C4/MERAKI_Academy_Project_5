import React from "react";
import GoogleLogin from "react-google-login";

const GoogleSignIn = () => {
  console.log("omar");
  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = (googleData) => {
    console.log(googleData);
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
