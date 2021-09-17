import React from "react";
import ColorBox from "./colorBox";
import "./styles/palette.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
class Palette extends React.Component {
  constructor(props) {
    super();
    this.state = {
      level: 500,
    };
  }
  changeLevel = (newLevel) => {
    this.setState({ level: newLevel });
  };
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    return (
      <div className="palette">
        {/* Navbar goes here */}
        <Slider
          defaultValue={level}
          min={100}
          step={100}
          max={900}
          onAfterChange={this.changeLevel}
        />
        <div className="palette-colors">
          {colors[this.state.level].map((color) => (
            <ColorBox background={color.hex} name={color.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Palette;
