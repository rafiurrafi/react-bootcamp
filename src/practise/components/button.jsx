import React from "react";

const Button = (props) => {
  console.log(props.children, "Rendering...");
  return <button onClick={props.handleClick}>{props.children}</button>;
};

export default Button;
