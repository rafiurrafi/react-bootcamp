import React from "react";
import CardList from "./components/cardList";
import SearchBox from "./searchBox";

class App extends React.Component {
  state = {
    monsters: [],
    searchValue: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters }));
  }
  render() {
    const { monsters, searchValue } = this.state;
    const filterMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div>
        <SearchBox
          placeholder="Search monster"
          value={this.state.searchValue}
          handleChange={(e) => this.setState({ searchValue: e.target.value })}
        />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
