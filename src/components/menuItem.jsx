import React from "react";

const MenuItem = (props) => {
  const styles = {
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  console.log(props.image);
  return (
    <div
      className="menu-item"
      style={{
        ...styles,
        backgroundImage: `linear-gradient(rgba(#000, .7), rgba(#000, .7)) ,url(${props.image})`,
      }}
    >
      <div className="content">
        <h1 className="title">{props.title}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
