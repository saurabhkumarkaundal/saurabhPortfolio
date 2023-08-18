import React, { Component } from "react";
import { MenuItems } from "./MenuItems.js";
import { Link } from "react-scroll";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    return (
      <>
      <nav className="NavbarItems" id="top">
        <h1 className="navbar-logo">
          <Link to="home" spy={true} smooth={true}>
            <img
              src="images/m.svg"
              alt="logo"
              height="50"
              width="50"
              className="logo"
            />
          </Link>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <Link
                to={item.url}
                spy={true}
                smooth={true}
                className={item.cName}
                style={{ textDecoration: "none" }}
              >
                <li key={index}>{item.title}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
      </>
    );
  }
}
export default Navbar;
