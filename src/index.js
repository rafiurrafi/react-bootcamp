import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ChromaApp from "./chroma/chromaApp";
// crown start
import CrownApp from "./crown/crownApp";
// crown end
import PractiseApp from "./practise/practiseApp";
// chrome start
// chroma end
ReactDOM.render(
  <BrowserRouter>
    <CrownApp />
  </BrowserRouter>,
  // <PractiseApp />,
  // <ChromaApp />,
  document.getElementById("root")
);
