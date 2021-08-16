import React, { Component } from "react";
import NewTodoForm from "./newTodoForm";
import Todo from "./todo";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  remove(id) {
    const todos = this.state.todos.filter((t) => t.id !== id);
    this.setState({ todos });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        task={todo.task}
        onRemove={() => this.remove(todo.id)}
      />
    ));
    return (
      <div>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
