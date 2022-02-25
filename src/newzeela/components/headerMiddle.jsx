import React from "react";
import Banner from "./common/banner";
import "./styles/headerMiddle.scss";
import bannerImg from "../assets/banner-1.jpg";
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
      <div className="header__banner">
        <Banner imgSrc={bannerImg} />
      </div>
    </div>
  );
};

export default HeaderMiddle;
