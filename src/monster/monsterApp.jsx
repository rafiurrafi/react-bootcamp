import React, { Component } from "react";
import CardList from "./components/card-list/cardList";

class MonsterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }
  render() {
    return (
      <div>
        <h1>Monster</h1>
        <input
          type="search"
          placeholder="search"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
            console.log(this.state);
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default MonsterApp;
