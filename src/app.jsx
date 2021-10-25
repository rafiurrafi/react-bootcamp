import React from "react";
// import TodoApp from "./practise/todoApp";
// import AmazonApp from "./amazon/amazonApp";
import "./app.css";
import Homepage from "./pages/homepage/homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/hats" component={() => <h1>Hats</h1>} />
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
