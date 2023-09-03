import React from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { EducationDetails } from "./Details";
import "../Resume.css";

class Cards extends React.Component {
  render() {
    return (
      <div>
        {EducationDetails.map((item, index) => {
          return (
            <Col className="resume-container">
                <Row>
                <h4
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    fontFamily: "Poppins"
                  }}
                  className="achievement-course"
                >
                  {item.project}
                </h4>
              </Row>
              <Row>
                <h6
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    fontFamily: "Roboto"
                  }}
                  className="achievement-year"
                >
                  {item.duration}
                </h6>
              </Row>
              <Row>
              <h6
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    fontFamily: "Roboto"
                  }}
                  className="achievement-year"
                >
                  {item.job}
                </h6>
              </Row>
              <Row>
                <span
                  style={{
                    display: "inline-block",
                    marginBottom: "10px",
                    fontFamily: "Roboto",
                    fontSize: "15px",
                    opacity: "0.8",
                    fontWeight: "400",
                    lineHeight: "1.625em"
                  }}
                  className="achievement-college"
                >
                  {item.company}
                </span>
              </Row>

              <Row>
                <span
                  style={{
                    display: "inline-block",
                    marginBottom: "10px",
                    fontFamily: "Roboto",
                    fontSize: "15px",
                    opacity: "0.8",
                    fontWeight: "400",
                    lineHeight: "1.625em"
                  }}
                  className="achievement-desc"
                >
                  {item.desc}
                </span>
              </Row>
            </Col>
          );
        })}
      </div>
    );
  }
}

export default Cards;
