import React from "react";
import Notification from "../img/notification.svg";
import Message from "../img/message.svg";
import Settings from "../img/settings.svg";
import "../styles/navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Noti</div>
      <div className="icons">
        <div className="icon">
          <img src={Notification} alt="" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Message} alt="" />
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <img src={Settings} alt="" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
