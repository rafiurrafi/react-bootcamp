import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./crown/app";
import { CardContext } from "./crown/context/card.context";
import { ProductContext } from "./crown/context/product.context";
import { UserContext } from "./crown/context/user.context";
ReactDOM.render(
  <BrowserRouter>
    <UserContext>
      <ProductContext>
        <CardContext>
          <App />
        </CardContext>
      </ProductContext>
    </UserContext>
  </BrowserRouter>,
  document.querySelector("#root")
);
