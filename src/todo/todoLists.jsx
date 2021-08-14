import React, { Component } from "react";
import TodoInput from "./todoInput";
import TodoList from "./todoList";
class TodoLists extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <p>A simple React todo list app</p>
        <TodoList />
        <TodoInput />
      </div>
    );
  }
}

export default TodoLists;
