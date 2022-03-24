import React from "react";
import "./menuItem.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  const style = {
    backgroudSize: "cover",
    backgroundPosition: "center",
  };
  console.log(match.url);
  return (
    <div
      className={`menu-item ${size ? size : ""}`}
      style={{ backgroundImage: `url(${imageUrl})`, ...style }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
