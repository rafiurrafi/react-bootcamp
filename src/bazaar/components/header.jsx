import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          Bazaar
        </Link>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/Offer">Offer</Link>
            </li>
            <li>
              <Link to="/FAQ">FAQ</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Join">Join</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
