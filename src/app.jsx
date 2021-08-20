import React from "react";
import "./app.css";
import CounterClass from "./todos/hook-intro/counterClass";
import CounterHooks from "./todos/hook-intro/counterHooks";
import Toggler from "./todos/hook-intro/toggler";
const App = (props) => {
  return (
    <div className="App">
      <Toggler />
    </div>
  );
};

export default App;
