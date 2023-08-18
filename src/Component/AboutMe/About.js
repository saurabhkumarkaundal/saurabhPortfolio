import React, { Component } from "react";
import "./About.css";
import { Details } from "./Details.js";

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="container">
          <div className="about-image">
            <img
              src="https://media.licdn.com/dms/image/D5603AQH7IHxha-pVyw/profile-displayphoto-shrink_400_400/0/1690716805659?e=1697673600&v=beta&t=9T_I6NeghM5ndIhAZMwnF7OCOagIhQZ8Q_vOJyn-OlI"
              alt="Saurabh"
              height="300"
              width="300"
            />
          </div>
          <div className="about-section">
            <h1 className="about-header">
              About Me
              <hr className="divider" />
            </h1>

            <h3 className="about-intro">
              I’m a Front End Developer. Web Developer with expertise of React.js, Redux, JavaScrpit, HTML and CSS. Hand on experience in CNN and Python also . I have a passion for writing clean and
              modular code. I am also keen of maintaining beautiful,
              interactive, minimalistic, responsive and user-friendly UI.
            </h3>
            <br />
            <ul className="about-details">
              {Details.map((item, index) => {
                return (
                  <li className="about-details-list" key={index}>
                    <span className="about-title">{item.title} </span>
                    <span className="title.value">{item.value} </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
