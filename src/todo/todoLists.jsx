import React, { Component } from "react";
import { todoLists } from "./fakeTodoList";
import TodoInput from "./todoInput";
import TodoList from "./todoList";
class TodoLists extends Component {
  constructor() {
    super();
    this.state = {
      todoLists: [...todoLists],
    };
    this.addToList = this.addToList.bind(this);
  }
  addToList(title, _id) {
    const { todoLists } = this.state;
    const item = todoLists.find((itm) => todoLists._id === _id);
    console.log(item);
    const newTodoLists = [...todoLists, { _id: todoLists.length + 1, title }];
    this.setState({ todoLists: newTodoLists });
  }
  render() {
    const { todoLists } = this.state;
    return (
      <div>
        <h2>Todo List</h2>
        <p>A simple React todo list app</p>
        {todoLists.map((todoList) => (
          <TodoList
            key={todoList._id}
            todoList={todoList}
            onAddToList={this.addToList}
          />
        ))}
        <TodoInput />
      </div>
    );
  }
}

export default TodoLists;
