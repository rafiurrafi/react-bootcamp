import React from "react";
import { Select, MenuItem, Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      format: "hex",
      open: false,
    };
  }
  handleChange = (e) => {
    this.setState({ format: e.target.value, open: true }, () => {
      this.props.handleChange(this.state.format);
    });
  };
  handleSnackbarClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { open, format } = this.state;
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
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={open}
            autoHideDuration={3000}
            onClose={this.handleSnackbarClose}
            message={`Format changed to ${format}`}
            action={[
              <IconButton color="inherit" onClick={this.handleSnackbarClose}>
                <CloseIcon />
              </IconButton>,
            ]}
          />
        </header>
      </div>
    );
  }
}

export default Navbar;
