import React, { Component } from "react";

class MonsterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("Constructor");
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }
  render() {
    const filteredMonster = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    console.log(filteredMonster);
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="Search Monster"
          onChange={(event) => {
            this.setState({ searchField: event.target.value });
          }}
        />
        {filteredMonster.map((monster) => (
          <h3 key={monster.id}>{monster.name}</h3>
        ))}
      </div>
    );
  }
}

export default MonsterApp;
