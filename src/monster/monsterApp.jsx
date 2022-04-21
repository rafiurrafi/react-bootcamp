import React, { Component } from "react";

class MonsterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food1: {
        name: "egg",
      },
      food2: {
        name: "fish",
      },
      food3: {
        name: "Meat",
      },
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.food1}</h1>
        <h1>{this.state.food2}</h1>
        <h1>{this.state.food3}</h1>
      </div>
    );
  }
}

export default MonsterApp;
