import React from "react";
import { Route, Switch } from "react-router";
import "./app.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopPage";
import CounterClass from "./practise/counterClass";
import Toast from "./practise/toast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }
  incrementCounter() {
    this.setState({ value: this.state.value + 1 });
  }
  decrementCounter() {
    this.setState({ value: this.state.value - 1 });
  }
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
        <CounterClass
          value={this.state.value}
          onIncrementCounter={this.incrementCounter}
          onDecrementCounter={this.decrementCounter}
        />
        <Toast />
      </div>
    );
  }
}

export default App;
