import React, { Component } from "react";
import { MDBIcon, MDBContainer } from "mdbreact";
import { Link } from "react-scroll";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer" id="footer">
        <h4 className="follow">Reach out to me at</h4>
        <MDBContainer
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <a
            href="https://www.linkedin.com/in/saurabh-kumar-kaundal-6bb471201/"
            className="social-logo"
          >
            <MDBIcon fab icon="linkedin-in" />
          </a>
          <a href="https://github.com/saurabhkumarkaundal" className="social-logo">
            <MDBIcon fab icon="github" />
          </a>
        </MDBContainer>
        <span>
          Designed by{" "}
          <a className="my-name" href="https://github.com/saurabhkumarkaundal">
            Saurabh Kumar Kaundal
          </a>
        </span>
        <Link
          id="scrollUp"
          to="top"
          smooth={true}
          style={{ position: "fixed", zIndex: "2147483647" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="currentColor"><path d="M5.293 11.707a1 1 0 0 0 1.414 0L12 6.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414z"/><path d="M5.293 19.707a1 1 0 0 0 1.414 0L12 14.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414z"/></g></svg>
        </Link>
      </div>
    );
  }
}

export default Footer;
