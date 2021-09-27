import React from "react";
import "../styles/button.scss";

const Button = (props) => {
  return <button className="btn">{props.text}</button>;
};

export default Button;
