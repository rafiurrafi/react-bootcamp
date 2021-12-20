import React from "react";
// import TodoApp from "./practise/todoApp";
// import AmazonApp from "./amazon/amazonApp";
import "./app.css";
import Homepage from "./pages/homepage/homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shopPage";
import Header from "./components/header/header";
import SigningPage from "./pages/signingPage/signingPage";
import { auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      curentUser: null,
    };
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ curentUser: user }, console.log(this.state.curentUser));
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header curentUser={this.state.curentUser} />
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