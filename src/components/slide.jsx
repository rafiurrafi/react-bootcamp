import React from "react";
import "./styles/slide.scss";
class Slide extends React.Component {
  render() {
    const { heading, text, imgSrc } = this.props;
    return (
      <div
        className="slide"
        style={{
          backgroundImage: `radial-gradient(circle, #00000042, #00000000, #00000000), url('${imgSrc}')`,
        }}
      >
        <div className="row">
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default Slide;
