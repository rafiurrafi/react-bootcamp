import React from "react";
import "./app.css";
import CounterClass from "./todos/hook-intro/counterClass";
import CounterHooks from "./todos/hook-intro/counterHooks";
const App = (props) => {
  return (
    <div className="App">
      <CounterClass />
      <CounterHooks />
    </div>
  );
};

export default App;
