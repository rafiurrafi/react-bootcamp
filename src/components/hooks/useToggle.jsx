import { useState } from "react";
const useToggle = (props) => {
  const [toggle, setToggle] = useState(props.initialValue);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return [toggle, handleToggle];
};

export default useToggle;
