import React from "react";
import "./styles/header.scss";
import logo from "../sunset-logo.png";
class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header__logo-container">
          <img className="header__logo" src={logo} alt="sunset-logo" />
        </div>
        <div className="header__menu">
          <a className="btn" href="#">
            What's new
          </a>
          <a className="btn" href="#">
            Join us
          </a>
          <a className="btn" href="#">
            Login
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
