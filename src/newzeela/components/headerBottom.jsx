import React from "react";
import "./styles/headerBottom.scss";
const HeaderBottom = ({ onOpenSidebar }) => {
  return (
    <div className="header__bottom">
      <div className="header__humbarger">
        <button onClick={onOpenSidebar}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>
      <div className="header__main-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Author</a>
          </li>
          <li>
            <a href="#">Author Profile</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
          <li>
            <a href="#">Video</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header__Date">SunDay, 02 Aug 2021</div>
    </div>
  );
};

export default HeaderBottom;
