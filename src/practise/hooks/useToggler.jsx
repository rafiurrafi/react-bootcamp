import { useState } from "react";

const useToggler = (initialValue) => {
  const [toggle, setToggle] = useState(initialValue);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return [toggle, handleToggle];
};
export default useToggler;
