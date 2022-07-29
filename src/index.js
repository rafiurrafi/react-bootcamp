import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./crown/App";
import CartProvider from "./crown/contexts/cart.context";
import CategoryProvider from "./crown/contexts/category.context";
import { UserProvider } from "./crown/contexts/user.context";

import "./crown/index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoryProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoryProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
