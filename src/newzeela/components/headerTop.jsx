import React from "react";
import "./styles/headerTop.scss";
import * as Fa from "react-icons/fa";
const HeaderTop = () => {
  return (
    <div className="headertop">
      <div className="headertop__left">
        <nav>
          <a href="#">Advertisement</a>
          <a href="#">Contact</a>
          <a href="#">Author</a>
          <a href="#">Forum</a>
        </nav>
      </div>
      <div className="headertop__right">
        <div className="headertop__socials">
          <a href="">
            <Fa.FaFacebookF />
          </a>
          <a href="">
            <Fa.FaTwitter />
          </a>
          <a href="">
            <Fa.FaLinkedin />
          </a>
          <a href="">
            <Fa.FaRss />
          </a>
        </div>
        <div className="headertop__button">
          <a href="">Login/Register</a>
        </div>
        <div className="headertop__language">
          <select>
            <a href=""></a>
            <option>English</option>
            <option>Bangla</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
