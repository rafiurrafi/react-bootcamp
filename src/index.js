import React from "react";
import { render } from "react-dom";
import PractiseApp from "./practise/practiseApp";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <PractiseApp />
  </React.StrictMode>,
  rootElement
);
