import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ChromaApp from "./chroma/chromaApp";
// crown start
import CrownApp from "./crown/crownApp";
import PortfolioApp from "./portfolio/portfolioApp";
// crown end
import PractiseApp from "./practise/practiseApp";
// chrome start
// chroma end
ReactDOM.render(
  // <BrowserRouter>
  //   <CrownApp />
  // </BrowserRouter>,
  // <PractiseApp />,
  // <ChromaApp />,
  <PortfolioApp />,
  document.getElementById("root")
);
