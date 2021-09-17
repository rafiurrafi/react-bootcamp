import React, { Component } from "react";
import { Select, MenuItem } from "@material-ui/core";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      format: "hex",
    };
  }
  handleChange = (e) => {
    this.setState({ format: e.target.value }, () => {
      this.props.handleChange(this.state.format);
    });
  };
  render() {
    const { format } = this.state;
    const { level, onChangeLevel } = this.props;
    return (
      <div>
        <header className="navbar">
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              step={100}
              max={900}
              onAfterChange={onChangeLevel}
            />
          </div>
          <div className="select">
            <Select value={format} onChange={this.handleChange}>
              <MenuItem value="hex">Hex</MenuItem>
              <MenuItem value="rgb">Rgb</MenuItem>
              <MenuItem value="rgba">Rgba</MenuItem>
            </Select>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
