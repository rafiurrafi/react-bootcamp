import React, { Component } from "react";
import Homepage from "./components/homepage/homepage";
class CrownApp extends Component {
  state = {};
  render() {
    return (
      <div className="crown-app">
        <Homepage />
      </div>
    );
  }
}

export default CrownApp;
