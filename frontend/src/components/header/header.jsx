import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "./crown.svg";
import "./header.scss";
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Signout
          </div>
        ) : (
          <Link to="/signin">Sign in</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
