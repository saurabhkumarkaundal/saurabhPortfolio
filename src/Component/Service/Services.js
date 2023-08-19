import React, { Component } from "react";
import Card from "./Card.js";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div className="Services" id="services">
        <div class="container">
          <div className="service-header">
            <span className="service-header">MY SERVICES</span>
              <b className="service-text">I can make these awesome things.</b>
            <span className="service-text" >
              I understand what your business means to you, your requirements
              considering trends.
            </span>
          </div>
          <div className="cards">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
