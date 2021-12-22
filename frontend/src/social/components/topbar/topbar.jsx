import React from "react";
import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <span className="logo">Social</span>
      </div>
      <div className="topbar__center">
        <div className="searchbar">
          <Search />
          <input
            type="text"
            className="searchbar__input"
            placeholder="Search for friends, post or videos"
          />
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar-links">
          <div className="topbar-link">Home</div>
          <div className="topbar-link">Timeline</div>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon">
            <Person />
            <span className="topbar-icon__badge">1</span>
          </div>
          <div className="topbar-icon">
            <Chat />
            <span className="topbar-icon__badge">1</span>
          </div>
          <div className="topbar-icon">
            <Notifications />
            <span className="topbar-icon__badge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt="profile img"
          className="topbar__img"
        />
      </div>
    </div>
  );
};

export default Topbar;
