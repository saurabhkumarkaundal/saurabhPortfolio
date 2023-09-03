import React, { Component } from "react";
import { MDBIcon, MDBContainer } from "mdbreact";
import { Link } from "react-scroll";
import "./Footer.css";
import { Button, Col, Row } from "react-bootstrap";
import { EmailSvg, GitSvg, LinkedInSvg } from "../../assets/svg/social/ContactSvg";

class Footer extends Component {
  render() {
    return (
      <div className="Footer" id="footer">
        <h4 className="follow">Reach out to me at</h4>
        <Row>
          <Col className="" style={{display:"flex"}}>
            <div className="m-2" style={{ margin:"1rem"}}>
              <a href="mailto:saurabhkaundal94@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button  title="saurabhkaundal94@gmail.com" style={{border:"none", cursor:"pointer", background:"content-box"}}>
                  <EmailSvg/>
                </Button>
              </a>
            </div>
            <div className="m-2" style={{ margin:"1rem"}}>
            <a href="https://www.linkedin.com/in/saurabh-kumar-kaundal-6bb471201/" target="_blank" rel="noopener noreferrer">
                <Button style={{border:"none", cursor:"pointer",background:"content-box"}} title="Visit my LinkenIn">
                  <LinkedInSvg/>
                </Button>
              </a>
            </div>
            
            <div className="m-2" style={{ margin:"1rem"}}>
            <a href="https://github.com/saurabhkumarkaundal" target="_blank" rel="noopener noreferrer">
                <Button style={{border:"none", cursor:"pointer",background:"content-box"}} title="My other projects">
                  <GitSvg/>
                </Button>
              </a>
            </div>
          </Col>
        </Row>
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
