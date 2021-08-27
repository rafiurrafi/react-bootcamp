import { useState } from "react";
const useInputHooks = (props) => {
  const [input, setInput] = useState(props.initialValue);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const reset = () => {
    setInput("");
  };
  return [input, handleInput, reset];
};

export default useInputHooks;
