import React, { useReducer } from "react";
function nameReducer(state, newState) {
  return newState;
}
const Counter = (props) => {
  const [name, setName] = useReducer(nameReducer, "");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const cache = {};
  function addTwo(input) {
    if (!cache.hasOwnProperty(input)) cache[input] = input + 2;
    return cache[input];
  }
  return (
    <div className="counter">
      <input value={name} onChange={handleChange} />
      <p>{name}</p>
    </div>
  );
};

export default Counter;
