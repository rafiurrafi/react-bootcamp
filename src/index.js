import React from "react";
import { render } from "react-dom";
import QuizApp from "./quiz/quizApp";
const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>,
  rootElement
);
