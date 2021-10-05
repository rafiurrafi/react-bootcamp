import React from "react";
import "./menuItem.scss";
const MenuItem = (props) => {
  const styles = {
    backgroundImage: `url(${props.imgSrc})`,
    backgroundSize: "cover",
    backgroudPosition: "center",
  };
  return (
    <div className={`menu-item ${props.size}`}>
      <div className="menu-background" style={styles} />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
