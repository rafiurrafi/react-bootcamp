import React from "react";

class CounterClass extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter class</h1>
        <p>{this.props.value}</p>
        <button onClick={this.props.onIncrementCounter}>+Counter</button>
        <button onClick={this.props.onDecrementCounter}>-Counter</button>
      </div>
    );
  }
}

export default CounterClass;
