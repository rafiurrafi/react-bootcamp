import React from "react";
import useToggler from "./hooks/useToggler";

const Toggler = (props) => {
  // const [isHappy, setIsHappy] = React.useState(false);
  // const [isHeartBroken, setIsHeartBroken] = React.useState(false);
  // const handleIsHappy = () => {
  //   setIsHappy(!isHappy);
  // };
  // const handleIsHeartBroken = () => {
  //   setIsHeartBroken(!isHeartBroken);
  // };
  const [isHappy, setIsHappy] = useToggler(false);
  const [isHeartBroken, setIsHeartBroken] = useToggler(false);
  return (
    <div>
      <h1 onClick={setIsHappy}>{isHappy ? "😂" : "😥"}</h1>
      <h1 onClick={setIsHeartBroken}>{isHeartBroken ? "💞" : "💔"}</h1>
    </div>
  );
};

export default Toggler;
