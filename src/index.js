import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./crown/App";
import { CategoriesProvider } from "./crown/contexts/categories.context";
import { CartProvider } from "./crown/contexts/cart.context";

import "./crown/index.scss";
import { Provider } from "react-redux";
import store from "./crown/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./crown/store/store";
const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
          <CartProvider>
            <App />
          </CartProvider>
          {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
