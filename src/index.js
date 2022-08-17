import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import "./crown/index.scss";
import PractiseApp from "./practise/practiseApp";
import store from "./practise/store/store";
const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <PractiseApp />
    </Provider>
  </React.StrictMode>,
  rootElement
);
