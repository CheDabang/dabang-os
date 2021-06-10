import React, { Component } from "react";
import { GiFishing } from "react-icons/gi";
import "./index.less";
class Boot extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.setLoading(false);
    }, 5000);
  }
  render() {
    return (
      <div className="boot-page">
        <div className="center-box">
          <GiFishing className="logo" />
          <div className="load-bar">
            <div className="bar"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boot;
