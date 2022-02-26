import { useState } from "react";
function useToggle(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return [toggle, handleToggle];
}

export default useToggle;
