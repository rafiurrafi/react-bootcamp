import { useState } from "react";

const useInput = ({ initialValue = "" }) => {
  const [input, setInput] = useState(initialValue);
  const handleInput = (e) => setInput(e.target.value);
  const resetInput = () => setInput("");
  return [input, handleInput, resetInput];
};

export default useInput;
