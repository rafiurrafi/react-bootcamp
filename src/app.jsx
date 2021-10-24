import React from "react";
// import TodoApp from "./practise/todoApp";
// import AmazonApp from "./amazon/amazonApp";
import "./app.css";
import Cards from "./components/cards";
import SearchBox from "./components/searchBox";
class App extends React.Component {
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
    const filterdMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <SearchBox
          searchField={this.state.searchField}
          onSearchChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <Cards monsters={filterdMonster} />
      </>
    );
  }
}

export default App;
