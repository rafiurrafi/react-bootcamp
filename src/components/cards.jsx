import React from "react";
import Card from "./card";
import "./styles/cards.scss";

const Cards = (props) => {
  return (
    <div className="cards">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default Cards;
