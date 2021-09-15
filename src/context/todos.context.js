import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";
export const TodosContext = createContext();

const TodosProvider = (props) => {
  const initialTodos = [{ id: 1, task: "Eat cow", completed: false }];
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodoState(initialTodos);
  return (
    <TodosContext.Provider
      value={{ todos, addTodo, removeTodo, editTodo, toggleTodo }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
