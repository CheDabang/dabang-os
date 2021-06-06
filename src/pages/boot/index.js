import React, { Component } from "react";
import { GiFishing } from "react-icons/gi";
import "./index.less";
class Boot extends Component {
  setLoading() {
    alert(1111);
  }

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
