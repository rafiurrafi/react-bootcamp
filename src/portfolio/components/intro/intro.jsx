import React from "react";
import "./intro.scss";
import men from "../../img/men.png";
const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={men} alt="Logo" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Intro;
