import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date(),
    };
    this.addClick = this.addClick.bind(this);
    this.tick = this.tick.bind(this);
  }
  intervalID = null;
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
    this.intervalID = setInterval(this.tick, 1000);
  }
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  addClick() {
    this.setState({ count: this.state.count + 1 });
  }
  tick() {
    console.log("Ticking....");
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h3>{this.state.date.toLocaleTimeString("bn-BD")}</h3>
        <h1>{this.state.count}</h1>
        <button onClick={this.addClick}>Add</button>
      </div>
    );
  }
}

export default Clock;
