import { useReducer, useState } from "react";
import "./practiseApp.scss";
const PractiseApp = () => {
  import("./utils").then((math) => {
    console.log(math.add(1, 3));
  });
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default PractiseApp;
