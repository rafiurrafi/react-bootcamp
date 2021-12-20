import React from "react";
import "../styles/header.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="header">
      {/* Logo  */}
      <img
        className="header__logo"
        src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
        alt=""
      />
      {/* search box  */}
      <div className="header__search-box">
        <input className="header__search-input" />
        <SearchIcon className="header__search-icon" />
      </div>
      {/* 3 links  */}
      <div className="header__nav">
        <Link to="/login" className="header__nav-link">
          <span>Hello Man</span>
          <span>Sign in</span>
        </Link>
        <Link to="/login" className="header__nav-link">
          <span>Return</span>
          <span>&amp; Order</span>
        </Link>
        <Link to="/login" className="header__nav-link">
          <span>Your</span>
          <span>Prime</span>
        </Link>
        <Link to="/checkout" className="header__nav-link header__nav-basket">
          <span>0</span>
          <span>
            <ShoppingBasketIcon />
          </span>
        </Link>
      </div>
      {/* Busket icon with number  */}
    </header>
  );
};

export default Header;
