import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = (props) => {
  const { history, match, linkUrl } = props;
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="subtitle">Shop now</div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
