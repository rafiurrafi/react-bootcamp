import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import "./crownApp.scss";
class CrownApp extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="crown-app">
          <Switch>
            <Route path="/shop" component={ShopPage} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default CrownApp;
