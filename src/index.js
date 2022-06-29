import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./crown/app";
import { UserContext } from "./crown/context/user.context";
ReactDOM.render(
  <BrowserRouter>
    <UserContext>
      <App />
    </UserContext>
  </BrowserRouter>,
  document.querySelector("#root")
);
