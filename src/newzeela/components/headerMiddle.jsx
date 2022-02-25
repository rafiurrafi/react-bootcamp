import React from "react";
import "./styles/headerMiddle.scss";
const HeaderMiddle = () => {
  return (
    <div className="header-middle">
      <a href="#" className="header__logo">
        Newzeela
      </a>
      <div className="header__search">
        <input type="text" placeholder="Search" />
        <i className="fa fa-search"></i>
      </div>
    </div>
  );
};

export default HeaderMiddle;
