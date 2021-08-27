import { useState } from "react";
const useToggle = (props) => {
  console.log(props);
  const [toggle, setToggle] = useState(props);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return [toggle, handleToggle];
};

export default useToggle;
