import React from "react";
const Button = (props) => {
  console.log("Rendering button" + props.children);
  return <button onClick={props.onHandleIncrement}>{props.children}</button>;
};

export default React.memo(Button);
