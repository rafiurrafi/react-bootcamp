import React from "react";
// import TodoApp from "./practise/todoApp";
// import AmazonApp from "./amazon/amazonApp";
import "./app.css";
import Homepage from "./pages/homepage/homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shopPage";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
