import React, { Component } from "react";
import TodoText from "./todoText";
class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <TodoText />
      </div>
    );
  }
}

export default TodoList;
