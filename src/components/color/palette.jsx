import React from "react";
import ColorBox from "./colorbox";

class Palette extends React.Component {
  render() {
    return (
      <div className="palette">
        {/* Navbar goes here */}
        <div className="palette-colors">
          {this.props.colors.map((color) => (
            <ColorBox background={color.color} name={color.name} />
          ))}
        </div>
        {/* Footer goes here  */}
      </div>
    );
  }
}

export default Palette;
