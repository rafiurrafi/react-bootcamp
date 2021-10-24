import React from "react";

const ShowCount = (props) => {
  console.log(props.title + " Rendering ...");
  return <h2>Count is {props.count}</h2>;
};

export default React.memo(ShowCount);
