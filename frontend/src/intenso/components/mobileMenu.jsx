import React from "react";
import { Link } from "react-router-dom";
import "../styles/mobileMenu.scss";
const MobileMenu = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div className="mobile-menu">
      <div
        className={`mobile-menu__icon ${openMenu && "change"}`}
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
  );
};

export default MobileMenu;
