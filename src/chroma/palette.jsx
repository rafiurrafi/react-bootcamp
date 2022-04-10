import React, { Component } from "react";
import ColorBox from "./colorBox";
import "./styles/palette.scss";
class Palette extends Component {
  state = {};
  render() {
    return (
      <div className="palette">
        {/* navbar  */}
        <div className="palette-colors">
          {this.props.colors.map((color) => (
            <ColorBox key={color.id} background={color.color} {...color} />
          ))}
        </div>
        {/* Footer eventually  */}
      </div>
    );
  }
}

export default Palette;
