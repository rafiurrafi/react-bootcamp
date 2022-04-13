import React from "react";
import "./intro.scss";
import men from "../../img/men.png";
import * as fa from "react-icons/fa";
import { init } from "ityped";
const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={men} alt="Logo" />
        </div>
      </div>
      <div className="right">
        <h4>Hi There, I'm </h4>
        <h1>Hanna Khan</h1>
        <h5>Freelancer</h5>
        <button>
          <fa.FaArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Intro;
