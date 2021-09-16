import React from "react";

const Card = (props) => {
  return (
    <div>
      <img
        alt=""
        src={`https://robohash.org/${props.monster.id}/set=set2&size=180x180`}
      />
      <h1>{props.monster.name}</h1>
    </div>
  );
};

export default Card;
