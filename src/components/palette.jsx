import React from "react";
import ColorBox from "./colorBox";
import "./styles/palette.scss";

const Palette = (props) => {
  return (
    <div className="palette">
      {/* Navbar goes here */}
      <div className="palette-colors">
        {props.palette.colors.map((color) => (
          <ColorBox {...color} />
        ))}
      </div>
    </div>
  );
};

export default Palette;
