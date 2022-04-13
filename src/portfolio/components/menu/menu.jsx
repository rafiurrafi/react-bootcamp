import React from "react";
import "./menu.scss";
const Menu = ({ openMenu, onOpenMenu }) => {
  return (
    <div className={`menu ${openMenu ? "show" : ""}`}>
      <button onClick={() => onOpenMenu(false)}>&times;</button>
      <ul>
        <li onClick={() => onOpenMenu(!openMenu)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => onOpenMenu(!openMenu)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => onOpenMenu(!openMenu)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => onOpenMenu(!openMenu)}>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li onClick={() => onOpenMenu(!openMenu)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
