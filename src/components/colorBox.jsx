import React from "react";
import "./styles/colorbox.scss";
class ColorBox extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="colorbox" style={{ backgroundColor: this.props.color }}>
        <div className="copy-container">
          <div className="box-content">
            <span>{this.props.name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default ColorBox;
