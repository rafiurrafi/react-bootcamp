import React, { Component } from "react";
import Todo from "./todo";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{ task: "Walk the fish" }, { task: "Eat the fish" }],
    };
  }
  render() {
    const todos = this.state.todos.map((todo) => <Todo task={todo.task} />);
    return (
      <div>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
