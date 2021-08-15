import React from "react";
import "./app.css";
import TodoList from "./todos/todoList";
const App = (props) => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
