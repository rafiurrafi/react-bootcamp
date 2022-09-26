import { useState } from "react";
import "./practiseApp.scss";
const PractiseApp = () => {
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(10);
  const [inset, setInset] = useState(false);
  console.log(horizontal);
  return (
    <div>
      <div>
        <div className="mb-5">
          <label htmlFor="">Horizontal</label> <br />
          <input
            type="range"
            min={0}
            max={100}
            value={horizontal}
            onChange={(e) => setHorizontal(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="">Vertical</label> <br />
          <input
            type="range"
            min={0}
            max={100}
            value={vertical}
            onChange={(e) => setVertical(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="">Blur</label> <br />
          <input
            type="range"
            min={0}
            max={100}
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            value={inset}
            onChange={() => setInset(!inset)}
          />
        </div>
      </div>
      <div
        className="box"
        style={{
          boxShadow: `${
            inset ? "inset" : ""
          } ${horizontal}px ${vertical}px ${blur}px #000`,
        }}
      ></div>
    </div>
  );
};

export default PractiseApp;
