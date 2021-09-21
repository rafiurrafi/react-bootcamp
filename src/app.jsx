import React from "react";
import TodoApp from "./components/todo/todoApp";
import "./app.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <TodoApp />
      </div>
    );
  }
}

export default App;
