import React from "react";
import "./menuItem.scss";
import { withRouter } from "react-router-dom";
const MenuItem = (props) => {
  const styles = {
    backgroundImage: `url(${props.imgSrc})`,
    backgroundSize: "cover",
    backgroudPosition: "center",
  };
  const { history, match } = props;
  const { title, size, linkUrl } = props.menuItem;

  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="menu-background" style={styles} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
