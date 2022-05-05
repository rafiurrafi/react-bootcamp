import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./crown/contexts/user.context";
import CrownApp from "./crown/App";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CrownApp />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
