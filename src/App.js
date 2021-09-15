import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "INCREMENT") return { count: state.count + 1 };
  else if (action.type === "DECREMENT") return { count: state.count - 1 };
}

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+Add</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-Subtract</button>
    </div>
  );
};

export default App;
