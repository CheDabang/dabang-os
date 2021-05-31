import React, { Component } from 'react';
import { GiFishing } from "react-icons/gi";
import "./index.less"
class Boot extends Component {
    render() { 
        return ( 
            <div className="boot-page">
                <div className="center-box">
                    <GiFishing className="logo"/>
                    <div className="load-bar"></div>
                </div> 
            </div>
         );
    }
}
 
export default Boot;