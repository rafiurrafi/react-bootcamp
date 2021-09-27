import React from "react";
import "./styles/header.scss";
import logo from "../sunset-logo.png";
import Button from "./common/button";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="header__logo-container">
            <img className="header__logo" src={logo} alt="sunset-logo" />
          </div>
          <div className="header__menu">
            <Button text="What's new" />
            <Button text="Join us" />
            <Button text="Login" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
