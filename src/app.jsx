import React, { useReducer, useState } from "react";
import "./app.css";
function reducer(state, action) {
  if (action.type == "INCREMENT") return { count: state.count + 1 };
  if (action.type === "DECREMENT") return { count: state.count - 1 };
}
const App = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [count, setCount] = useState(0);
  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };
  // const handleDecrement = () => {
  //   if (count <= 0) return;
  //   setCount(count - 1);
  // };
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <div>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +1
        </button>
        <button onClick={() => dispatch("DECREMENT")}>-1</button>
      </div>
    </div>
  );
};

export default App;
