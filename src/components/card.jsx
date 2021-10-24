import React from "react";
import "./styles/card.scss";
const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card__content">
        <img
          alt={props.monster.name}
          src={`https://robohash.org/${props.monster.id}?set=set2&size=160x160`}
        />
        <h1>{props.monster.name}</h1>
      </div>
    </div>
  );
};

export default Card;
