import React from "react";
import "./menuItem.scss";
const MenuItem = ({ title, imageUrl, size }) => {
  const style = {
    backgroudSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className={`menu-item ${size ? size : ""}`}
      style={{ backgroundImage: `url(${imageUrl})`, ...style }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
