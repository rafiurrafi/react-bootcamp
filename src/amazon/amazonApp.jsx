import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header";
const AmazonApp = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/checkout" component={() => <h1>Checkout</h1>} />
        <Route path="/login" component={() => <h1>Login</h1>} />
        <Route path="/" component={() => <Header />} />
      </Switch>
    </BrowserRouter>
  );
};

export default AmazonApp;
