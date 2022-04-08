import React, { Component } from "react";
import CardList from "./components/card-list/cardList";
import Searchbox from "./components/searchbox/searchbox";
import styled from "styled-components";
const Text = styled.div`
  font-size: "245px";
`;

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
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <h1>Monster</h1>
        <Searchbox
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default MonsterApp;
