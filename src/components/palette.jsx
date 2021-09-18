import React from "react";
import ColorBox from "./colorBox";
import "./styles/palette.scss";
import Navbar from "./navbar";
class Palette extends React.Component {
  constructor(props) {
    super();
    this.state = {
      level: 500,
      format: "hex",
    };
  }
  changeLevel = (newLevel) => {
    this.setState({ level: newLevel });
  };
  handleFormatChange = (format) => {
    this.setState({ format });
  };
  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    return (
      <div className="palette">
        {/* Navbar goes here */}
        <Navbar
          level={level}
          onChangeLevel={this.changeLevel}
          handleChange={this.handleFormatChange}
        />
        <div className="palette-colors">
          {colors[this.state.level].map((color) => (
            <ColorBox
              background={color[format]}
              name={color.name}
              key={color.id}
              id={color.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Palette;
