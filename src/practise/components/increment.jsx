import React, { useReducer } from "react";
const initialValue = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
const Increment = (props) => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button>-</button>
    </div>
  );
};

export default Increment;
