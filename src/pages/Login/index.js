import React, { Component } from "react";
import "./index.less";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="logo-page">
        <div className="center-box">
          <img
            className="avatar"
            src={require("../../assets/avatar.jpg").default}
            alt="头像"
          />
          <div>
            <p className="user-name">CheDabang</p>
            <input
              placeholder="Enter Password"
              className="pass-word"
              type="password"
            />
          </div>
        </div>
        <div className="bottom-box"></div>
      </div>
    );
  }
}

export default Login;
