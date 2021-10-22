import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date(),
    };
    this.addCount = this.addCount.bind(this);
    this.tick = this.tick.bind(this);
  }
  addCount() {
    this.setState({ count: this.state.count + 1 });
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
    setInterval(this.tick, 1000);
  }
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    const { count, date } = this.state;
    return (
      <div>
        <h1>{date.toLocaleTimeString()}</h1>
        <button onClick={this.addCount}>+Add</button>
      </div>
    );
  }
}

export default CounterClass;
