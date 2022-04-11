import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
const Topbar = ({ openMenu, onOpenMenu }) => {
  return (
    <div className={"topbar " + (openMenu ? "active" : "")}>
      <div className="wrapper">
        <div className="left">
          <a href="#" className="logo">
            Genius.
          </a>
          <div>
            <Person className="topbar__icon" />
            {/* <span>+231 212 121</span> */}
          </div>
          <div>
            <Mail className="topbar__icon" />
            {/* <span>rafiurrahman2022@hotmail.com</span> */}
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => onOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
