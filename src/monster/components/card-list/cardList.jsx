import React, { Component } from "react";
import Card from "../card/card";
import "./cardList.scss";
class CardList extends Component {
  state = {};
  //   https://robohash.org/1?set-set2
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
