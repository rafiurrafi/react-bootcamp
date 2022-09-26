import { useReducer, useState } from "react";
import "./practiseApp.scss";
const INITIAL_STATE = {
  horizontal: 10,
  vertical: 10,
  blue: 10,
  inset: false,
  color: "black",
};
const boxShadowReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_HORIZONTAL":
      return { ...state, horizontal: payload };
    case "SET_VERTICAL":
      return { ...state, vertical: payload };
    case "SET_BLUR":
      return { ...state, blur: payload };
    case "SET_INSET":
      return { ...state, inset: payload };
    case "SET_COLOR":
      return { ...state, color: payload };

    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};
const PractiseApp = () => {
  //   const [horizontal, setHorizontal] = useState(10);
  //   const [vertical, setVertical] = useState(10);
  //   const [blur, setBlur] = useState(10);
  //   const [inset, setInset] = useState(false);
  const [{ horizontal, vertical, inset, blur, color }, dispatch] = useReducer(
    boxShadowReducer,
    INITIAL_STATE
  );
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
            onChange={(e) =>
              dispatch({ type: "SET_HORIZONTAL", payload: e.target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="">Vertical</label> <br />
          <input
            type="range"
            min={0}
            max={100}
            value={vertical}
            onChange={(e) =>
              dispatch({ type: "SET_VERTICAL", payload: e.target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="">Blur</label> <br />
          <input
            type="range"
            min={0}
            max={100}
            value={blur}
            onChange={(e) =>
              dispatch({ type: "SET_BLUR", payload: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="color"
            value={color}
            onChange={(e) =>
              dispatch({ type: "SET_COLOR", payload: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="checkbox"
            value={inset}
            onChange={() => dispatch({ type: "SET_INSET", payload: !inset })}
          />
        </div>
      </div>
      <div
        className="box"
        style={{
          boxShadow: `${
            inset ? "inset" : ""
          } ${horizontal}px ${vertical}px ${blur}px #000`,
          backgroundColor: `${color}`,
        }}
      ></div>
    </div>
  );
};

export default PractiseApp;
