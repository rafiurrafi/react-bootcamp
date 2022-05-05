import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import CrownApp from "./crown/crownApp";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <CrownApp />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
