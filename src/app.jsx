import React from "react";
import TodoApp from "./components/todo/todoApp";
import "./app.css";
import Palette from "./components/color/palette";
import seedColors from "./seedColors";
import Home from "./components/battle/home";
import About from "./components/battle/about";
import Contact from "./components/battle/contact";
import { Switch, Route, Link } from "react-router-dom";
import Food from "./components/battle/food";
class App extends React.Component {
  render() {
    return (
      // Todo app
      <div>
        <TodoApp />
      </div>

      // Color App
      // <Palette {...seedColors[4]} />

      // the war begins
      // <div>
      //   <Route
      //     path="/food/:name"
      //     render={(props) => <Food name={props.match.params.name} {...props} />}
      //   />
      //   <Route path="/food/tiger" render={() => <Food name="tiger" />} />
      //   <Route path="/food/snake" render={() => <Food name="snake" />} />
      // </div>
    );
  }
}

export default App;
