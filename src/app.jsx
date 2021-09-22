import React from "react";
import TodoApp from "./components/todo/todoApp";
import "./app.css";
import Home from "./components/battle/home";
import About from "./components/battle/about";
import Contact from "./components/battle/contact";
import { Switch, Route, Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      // Todo app
      <div>
        <TodoApp />
      </div>

      // the war begins
      // <div>
      //   <Link to="/about/r">About</Link>
      //   <Link to="/about/c">About-c</Link>
      //   <Link to="/contact">Contact</Link>
      //   <Link to="/Home">Home</Link>
      //   <Switch>
      //     <Route path="/about/r" render={() => <About name="Adimurai" />} />
      //     <Route path="/about/c" component={() => <About name="boxing" />} />
      //     <Route
      //       path="/contact"
      //       component={() => <Contact name="Katrian" />}
      //       name="Hamid"
      //     />
      //     <Route path="/" component={Home} />
      //   </Switch>
      // </div>
    );
  }
}

export default App;
