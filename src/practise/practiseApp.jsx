import React from "react";
import { useState } from "react";
import Button from "./components/button";
import ShowCounter from "./components/showCounter";
import Title from "./components/title";
const PractiseApp = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleIncrementByOne = () => setCount1(count1 + 1);
  const handleIncrementByFive = () => setCount2(count2 + 5);
  return (
    <div>
      <Title title="Welcome to our app" />
      <ShowCounter number={1} count={count1} />
      <Button onHandleIncrement={handleIncrementByOne}>Increment By One</Button>
      <hr />
      <ShowCounter number={2} count={count2} />
      <Button onHandleIncrement={handleIncrementByFive}>
        Increment By One
      </Button>
    </div>
  );
};

export default PractiseApp;
