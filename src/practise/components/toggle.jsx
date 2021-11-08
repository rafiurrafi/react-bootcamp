import React from "react";
import useToggle from "./hooks/useToggle";

const Toggle = (props) => {
  const [isHappy, setIsHappy] = useToggle(true);
  const [isHeartBroken, setIsHeartBroken] = useToggle(true);

  return (
    <div>
      <h1
        onClick={setIsHappy}
        style={{ cursor: "pointer", fontSize: 60, textAlign: "center" }}
      >
        {isHappy ? "🤣" : "😥"}
      </h1>
      <h1
        onClick={setIsHeartBroken}
        style={{ cursor: "pointer", fontSize: 60, textAlign: "center" }}
      >
        {isHeartBroken ? "💔" : "💓"}
      </h1>
    </div>
  );
};

export default Toggle;
