import React, { useEffect, useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });
  return <button onClick={() => setCount(count + 1)}>Click {count}</button>;
};

export default Counter;
