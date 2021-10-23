import React, { useEffect, useState } from "react";

const Counter = (props) => {
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log("Useeffect rendering...");
    document.title = `Clicked ${value}`;
  }, [value]);
  useEffect(() => {
    console.log("Time..");
    const timerId = setInterval(() => {
      setDate(new Date());
      console.log("Running...");
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <div>
      <h1>{value}</h1>
      <h2>{date.toLocaleTimeString()}</h2>{" "}
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)} disabled={value <= 0}>
        -
      </button>
    </div>
  );
};

export default Counter;
