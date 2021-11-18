import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/logo.png";
import Button from "./common/button";
import Navbar from "./navbar";

import "../styles/header.scss";
const Header = () => {
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
    </header>
  );
};

export default Header;
