import React, { Component } from "react";
import NewTodoForm from "./newTodoForm";
import Todo from "./todo";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{ task: "Walk the fish" }, { task: "Eat the fish" }],
    };
    this.create = this.create.bind(this);
  }
  create(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  render() {
    const todos = this.state.todos.map((todo) => <Todo task={todo.task} />);
    return (
      <div>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
