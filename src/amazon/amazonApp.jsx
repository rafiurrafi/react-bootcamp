import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
const AmazonApp = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/checkout" component={() => <h1>Checkout</h1>} />
        <Route path="/login" component={() => <h1>Login</h1>} />
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AmazonApp;
