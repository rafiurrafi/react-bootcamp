import React from "react";
import Clock from "./components/clock";
const PractiseApp = (props) => {
  const [showClock, setShowClock] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShowClock(!showClock)}>Toggle</button>
      {showClock ? <Clock /> : <h1>Clock is offf</h1>}
    </div>
  );
};

export default PractiseApp;
