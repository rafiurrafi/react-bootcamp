import React, { useReducer } from "react";
function nameReducer(state, newState) {
  return newState;
}
const Counter = (props) => {
  const [name, setName] = useReducer(nameReducer, "");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="counter">
      <input value={name} onChange={handleChange} />
      <p>{name}</p>
    </div>
  );
};

export default Counter;
