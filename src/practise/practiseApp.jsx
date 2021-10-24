import React, { useCallback, useState } from "react";
import Button from "./components/button";
import ShowCount from "./components/showCount";
import Title from "./components/title";
const PractiseApp = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleClick1 = useCallback(() => {
    setCount1((count) => count + 1);
  }, []);
  const handleClick2 = useCallback(() => {
    setCount2((count) => count + 5);
  }, []);
  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={handleClick1}>Increment By One</Button>
      <hr />
      <ShowCount count={count2} title="Counter 1" />
      <Button handleClick={handleClick2} title="Counter 5">
        Increment By five
      </Button>
    </div>
  );
};

export default PractiseApp;
