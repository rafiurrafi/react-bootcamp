import React from "react";
import { createContext, useState } from "react";
import uuid from "uuid/v4";

export const ThemeContext = createContext();

const TodoProvider = (props) => {
  const defaultTodos = [
    { _id: uuid(), task: "Go home", completed: false },
    { _id: uuid(), task: "Go to restaurant", completed: false },
    { _id: uuid(), task: "Come  back", completed: false },
  ];
  const [todos, setTodos] = useState(defaultTodos);
  const addTodos = (task) => {
    const newTodos = [...todos, { _id: uuid(), task: task, completed: false }];
    setTodos(newTodos);
  };
  const removeTodos = (id) => {
    console.log(id);
    const newTodos = todos.filter((todo) => todo._id !== id);
    setTodos(newTodos);
  };
  const toggleTodos = (id) => {
    const newTodos = todos.map((todo) =>
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };
  const editTodos = (id, task) => {
    const editedTodos = todos.map((todo) =>
      todo._id === id ? { ...todo, task: task } : todo
    );
    setTodos(editedTodos);
  };
  return (
    <ThemeContext.Provider
      value={(todos, addTodos, removeTodos, editTodos, toggleTodos)}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default TodoProvider;
