import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./crown/App";
import { UserProvider } from "./crown/contexts/user.context";
import { CategoriesProvider } from "./crown/contexts/categories.context";
import { CartProvider } from "./crown/contexts/cart.context";
import store from "./crown/store/store";
import "./crown/index.scss";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
