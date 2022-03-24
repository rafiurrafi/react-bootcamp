import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import "./crownApp.scss";
import Header from "./components/header/header";
import SignInAndSignOut from "./pages/signInAndSignOutPage/signInAndSignOutPage";
class CrownApp extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="crown-app">
          <Header />
          <Switch>
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignOut} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default CrownApp;
