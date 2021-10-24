import React, { useState } from "react";
import Button from "./components/button";
import ShowCount from "./components/showCount";
import Title from "./components/title";
const PractiseApp = (props) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={() => setCount1(count1 + 1)}>
        Increment By One
      </Button>
      <hr />
      <ShowCount count={count2} title="Counter 1" />
      <Button handleClick={() => setCount2(count2 + 5)} title="Counter 5">
        Increment By five
      </Button>
    </div>
  );
};

export default PractiseApp;
