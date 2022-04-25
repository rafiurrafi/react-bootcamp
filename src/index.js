import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ChromaApp from "./chroma/chromaApp";
// crown start
import CrownApp from "./crown/crownApp";
import PortfolioApp from "./portfolio/portfolioApp";
// crown end
import PractiseApp from "./practise/practiseApp";
import MonsterApp from "./monster/monsterApp";
import UserProvider from "./crown/context/user.context";
import ProductProvider from "./crown/context/product.context";
// chrome start
// chroma end
ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <CrownApp />
      </ProductProvider>
    </UserProvider>
  </BrowserRouter>,
  // <PractiseApp />,
  // <ChromaApp />,
  // <MonsterApp />,
  // <PortfolioApp />,
  document.getElementById("root")
);
