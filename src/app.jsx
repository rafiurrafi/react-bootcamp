import React from "react";
// import TodoApp from "./practise/todoApp";
// import AmazonApp from "./amazon/amazonApp";
import "./app.css";
import Cards from "./components/cards";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }
  render() {
    return <Cards monsters={this.state.monsters} />;
  }
}

export default App;
