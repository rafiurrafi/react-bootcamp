import { useState } from "react";

const useInputHooks = ({ initialValue }) => {
  const [input, setInput] = useState(initialValue);
  const handleChange = (e) => setInput(e.target.value);
  return [input, handleChange];
};

export default useInputHooks;
