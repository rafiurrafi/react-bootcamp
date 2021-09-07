import { useState } from "react";
const useToggle = ({ initialValue = "" }) => {
  const [state, setState] = useState(initialValue);
  function handleStateChange() {
    setState(!state);
  }
  return [state, handleStateChange];
};

export default useToggle;
