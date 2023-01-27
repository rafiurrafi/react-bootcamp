import React from "react";
import { render } from "react-dom";
import "./crown/index.scss";
import App from "./crown/App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./crown/context/user.context";
import ProductProvider from "./crown/context/products.context";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
