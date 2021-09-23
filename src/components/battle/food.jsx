import React from "react";

const Foor = (props) => {
  const imgSrc = `https://source.unsplash.com/1600x900?${props.name}`;
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={imgSrc} alt={props.name} />
    </div>
  );
};

export default Foor;
