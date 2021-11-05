import React from "react";
import { useState } from "react";
import Button from "./components/button";
import ShowCounter from "./components/showCounter";
import Title from "./components/title";
const PractiseApp = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleIncrementByOne = React.useCallback(
    () => setCount1((count) => count + 1),
    []
  );
  const isEven = React.useMemo(() => {
    var i = 0;
    while (i < 1000000000) i++;
    return count1 % 2 ? "Odd" : "Even";
  }, [count1]);
  const handleIncrementByFive = React.useCallback(
    () => setCount2((count) => count + 5),
    []
  );
  return (
    <div>
      <Title title="Welcome to our app" />
      <ShowCounter number={1} count={count1} />
      <Button onHandleIncrement={handleIncrementByOne}>Increment By One</Button>
      <br />
      {isEven}
      <hr />
      <ShowCounter number={2} count={count2} />
      <Button onHandleIncrement={handleIncrementByFive}>
        Increment By Five
      </Button>
    </div>
  );
};

export default PractiseApp;
