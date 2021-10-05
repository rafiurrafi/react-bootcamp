import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        Crwn
      </Link>
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/shop">
          Shop
        </Link>
      </div>
    </div>
  );
};

export default Header;
