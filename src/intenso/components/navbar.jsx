import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <ul className="nav__main">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/work">
            How's Work
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/track">
            Track My Order
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/about">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
