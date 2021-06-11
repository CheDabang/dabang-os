import React, { Component } from "react";
import { RiShutDownLine, RiRestartLine } from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
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
          <p className="user-name">车大棒</p>
          <div className="password">
            <input
              placeholder="password"
              className="password-input"
              type="password"
            />
            <div className="confirm">
              <AiOutlineArrowRight size={24} />
            </div>
          </div>
          <span class="tip">输入任意数字即可</span>
        </div>
        <div className="bottom-box">
          <div className="btn-list">
            <div className="flex" onClick={this.props.resetOS}>
              <div className="bg">
                <RiRestartLine size={36} />
              </div>
              <span>Restart</span>
            </div>
            <div className="flex">
              <div className="bg">
                <RiShutDownLine size={36} />
              </div>
              <span>Shut Down</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
