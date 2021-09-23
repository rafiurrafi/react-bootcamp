import React from "react";

class ColorBox extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}

export default ColorBox;
