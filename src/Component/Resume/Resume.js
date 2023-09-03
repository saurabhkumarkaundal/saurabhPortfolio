import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Education from "./Education/Education";
import Internship from "./Internship/Internship";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="Resume" id="resume">
        <h1 className="about-header" style={{ textAlign: "center" }}>
          Resume
        </h1>
        <Education />
        <Internship />
      </div>
    );
  }
}

export default Resume;
