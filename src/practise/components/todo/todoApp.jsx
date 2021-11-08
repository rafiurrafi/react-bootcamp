import React, { useState } from "react";
import Navbar from "./navbar";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const initialValue = [
  { id: 1, task: "Go home", completed: false },
  { id: 2, task: "Go home", completed: false },
  { id: 3, task: "Go home", completed: false },
];

const TodoApp = (props) => {
  const [todos, setTodos] = useState(initialValue);
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: 60 }} />
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
