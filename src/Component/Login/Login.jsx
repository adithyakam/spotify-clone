import React from "react";
import "./login.css";
import { accessUrl } from "../Spotify/spotify";

function Login() {
  {
    alert(
      "Hi, thanks for login need premium account to work this & also one active session of spotify in any device !!!"
    );
  }
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <a href={accessUrl}>Login with spotify</a>
    </div>
  );
}

export default Login;
