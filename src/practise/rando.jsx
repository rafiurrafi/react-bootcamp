import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
    };
  }
  componentDidMount() {
    this.setState({ time: new Date().getSeconds() });
    setInterval(() => {
      this.setState({ time: new Date().getSeconds() });
    }, 1000);
  }
  render() {
    return (
      <div className="rando">
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}

export default Rando;
