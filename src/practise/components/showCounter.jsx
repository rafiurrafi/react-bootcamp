import React from "react";

const ShowCounter = (props) => {
  console.log("rendering " + props.number + " show count");
  return <p>Counter 1 is {props.count}</p>;
};

export default ShowCounter;
