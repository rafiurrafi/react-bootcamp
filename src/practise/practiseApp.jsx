import React from "react";
import Counter from "./components/counter";
import InputHooks from "./components/inputHook";

const PractiseApp = (props) => {
  return (
    <div>
      <Counter />
      {/* <Toggle /> */}
      <InputHooks />
    </div>
  );
};

export default PractiseApp;
