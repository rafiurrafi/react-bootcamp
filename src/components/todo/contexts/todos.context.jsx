import React, { createContext } from "react";
import uuid from "./uuid/v4";
export const TodosContext = createContext();
const initialTodos = [
  { _id: uuid(), task: "Todo", completed: false },
  { _id: uuid(), task: "New", completed: false },
];
class TodosProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [...initialTodos],
    };
  }

  addTask(task) {
    this.setState({
      todos: [...this.state.todos, { _id: uuid(), task, completed: false }],
    });
  }
  toggleTodos(id) {
    const updatedTodos = this.state.todos.map((todo) =>
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: updatedTodos });
  }
  editTodos(id, task) {
    const updatedTodos = this.state.todos.map((todo) =>
      todo._id === id ? { ...todo, task } : todo
    );
    this.setState({ todos: updatedTodos });
  }
  deleteTodos(id) {
    const updatedTodos = this.state.todos.filter((todo) => todo._id !== id);
    this.setState({ todos: updatedTodos });
  }
  render() {
    return (
      <TodosContext.Provider
        value={{
          ...this.state.todos,
          addTask: this.addTask,
          toggleTodos: this.toggleTodos,
          editTodos: this.editTodos,
          deleteTodos: this.deleteTodos,
        }}
      >
        {this.props.children}
      </TodosContext.Provider>
    );
  }
}

export default TodosProvider;
