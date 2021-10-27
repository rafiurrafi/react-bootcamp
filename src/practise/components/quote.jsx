import React from "react";
import axios from "axios";
class Quote extends React.Component {
  constructor() {
    super();
    this.state = { quote: "" };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/zen")
      .then((response) => this.setState({ quote: response.data }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.quote}</h1>
      </div>
    );
  }
}

export default Quote;
