import React, { Component } from "react";
class Card extends Component {
  state = {};
  render() {
    const { monster } = this.props;
    return (
      <div className="card">
        <img src={`https://robohash.org/${monster.id}?set-set2`} alt="" />
        <div key={monster.id}>{monster.name}</div>
        <p>
          <small>{monster.email}</small>
        </p>
      </div>
    );
  }
}

export default Card;
