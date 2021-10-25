import React from "react";
// import TodoApp from "./practise/todoApp";
// import AmazonApp from "./amazon/amazonApp";
import "./app.css";
import Homepage from "./pages/homepage/homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shopPage";
import Header from "./components/header/header";
import SigningPage from "./pages/signingPage/signingPage";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SigningPage} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
