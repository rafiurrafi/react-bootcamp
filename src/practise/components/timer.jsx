import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
    console.log("In constructor");
  }
  componentDidMount() {
    console.log("In component did mount");
    this.timerId = setInterval(() => this.setState({ time: new Date() }), 1000);
  }
  render() {
    console.log("In render...");
    return (
      <div>
        <h1>{this.state.time.getSeconds()}</h1>
      </div>
    );
  }
}

export default Timer;
