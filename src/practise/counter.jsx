import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.singleKill = this.singleKill.bind(this);
    this.trippleKill = this.trippleKill.bind(this);
  }
  singleKill() {
    this.setState({ count: this.state.count + 1 });
  }
  trippleKill() {
    this.setState((state) => ({ count: state.count + 1 }));
    this.setState((state) => ({ count: state.count + 1 }));
    this.setState((state) => ({ count: state.count + 1 }));
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.singleKill}>Single kill</button>
        <button onClick={this.trippleKill}>Tripple kill</button>
      </div>
    );
  }
}

export default Counter;
