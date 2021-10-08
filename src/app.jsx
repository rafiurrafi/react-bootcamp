import React from "react";
import { Route, Switch } from "react-router";
import "./app.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopPage";
import CounterClass from "./practise/counterClass";

class App extends React.Component {
  render() {
    return (
      //Master project
      // <div>
      //   <Header />
      //   <Switch>
      //     <Route path="/shop" component={ShopPage} />
      //     <Route path="/" component={HomePage} />
      //   </Switch>
      // </div>
      <div>
        <CounterClass />
      </div>
    );
  }
}

export default App;
