import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }
  incrementCounter() {
    this.setState({ value: this.state.value + 1 });
  }
  decrementCounter() {
    this.setState({ value: this.state.value - 1 });
  }
  render() {
    return (
      <div>
        <h1>Counter class</h1>
        <p>{this.state.value}</p>
        <button onClick={this.incrementCounter}>+Counter</button>
        <button onClick={this.decrementCounter}>-Counter</button>
      </div>
    );
  }
}

export default CounterClass;
