import React, { Component } from "react";
import Palette from "./palette";
import seedColors from "./seedColors";

class ChromaApp extends Component {
  render() {
    return (
      <div className="chroma-app">
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default ChromaApp;
