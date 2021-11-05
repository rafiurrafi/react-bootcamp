import React from "react";

const Title = (props) => {
  console.log("Rendering title");
  return <h1>{props.title}</h1>;
};

export default React.memo(Title);
