import React from "react";
import { render } from "react-dom";
import "./crown/index.scss";
import App from "./crown/App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./crown/context/user.context";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
