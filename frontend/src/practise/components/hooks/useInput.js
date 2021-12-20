import { useState } from "react";

const useInput = (initalValue = "") => {
  const [input, setInput] = useState(initalValue);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return [input, handleInputChange];
};
export default useInput;
