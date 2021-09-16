import React from "react";
import CardList from "./components/cardList";

class App extends React.Component {
  state = {
    monsters: [],
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters }));
  }
  render() {
    return <CardList monsters={this.state.monsters} />;
  }
}

export default App;
