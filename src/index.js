import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./apollos/app";
import store from "./apollos/store/store";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
