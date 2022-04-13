import React, { Component } from "react";
import "./styles/colorbox.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
    this.showOverlay = this.showOverlay.bind(this);
  }
  showOverlay() {
    console.log("Hello");
    this.setState({ copied: true }, function () {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }
  render() {
    const { background, name, color } = this.props;
    const { copied } = this.state;
    console.log(this.props);
    return (
      <CopyToClipboard text={color} onCopy={this.showOverlay}>
        <div className="color-box" style={{ background }}>
          <div className={`copy-overlay ${copied ? "show" : ""}`} />
          <div className="copy-overlay-text">
            <h2>Text</h2>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
        </div>
      </CopyToClipboard> 
    );
  }
}

export default ColorBox;
