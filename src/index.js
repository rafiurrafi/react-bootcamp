import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ChromaApp from "./chroma/chromaApp";
// crown start
import CrownApp from "./crown/crownApp";
import { Provider } from "react-redux";
import PortfolioApp from "./portfolio/portfolioApp";
// crown end
import PractiseApp from "./practise/practiseApp";
import MonsterApp from "./monster/monsterApp";
// chrome start
// chroma end
ReactDOM.render(
  <BrowserRouter>
    <CrownApp />
  </BrowserRouter>,
  // <PractiseApp />,
  // <ChromaApp />,
  // <MonsterApp />,
  // <PortfolioApp />,
  document.getElementById("root")
);
