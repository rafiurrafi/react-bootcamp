import React from "react";
import { Route, Switch } from "react-router";
import "./app.css";
import HomePage from "./pages/homepage/homepage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
