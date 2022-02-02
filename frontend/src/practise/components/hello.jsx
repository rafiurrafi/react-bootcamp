import React, { Component } from "react";

class Hello extends Component {
  state = {};
  render() {
    console.log(this.props);
    this.props.to = "Hello";
    return (
      <h1>
        Hello {this.props.to}, from {this.props.from}
      </h1>
    );
  }
}

export default Hello;
