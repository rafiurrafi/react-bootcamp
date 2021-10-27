import React from "react";

const Food = (props) => {
  const url = "https://source.unsplash.com/1600x900/?" + props.name;
  const { name } = props.match.params;
  return (
    <div>
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      <img alt={name} src={url} width="100%" />
    </div>
  );
};

export default Food;
