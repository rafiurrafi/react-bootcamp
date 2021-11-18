import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/logo.png";
import Button from "./common/button";
import Navbar from "./navbar";

import "../styles/header.scss";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header">
      <Link>
        <img src={img} alt="Intenso App logo" />
      </Link>
      <Navbar />
      <div className="header__buttons">
        <Button label="Log in" full={true} size="sm" />
        <Button label="Create account" size="sm" />
      </div>
      <div className="header__mobile-menu">
        <div
          className={`header__mobile-menu-icon ${openMenu && "change"}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <div className={`mobile-menu__content ${openMenu && "change"}`}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/work">How's Work</Link>
              </li>
              <li>
                <Link to="/track">Track My Order</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
