import React, { createContext, useReducer } from "react";
import reducer from "../reducer/todo.reducer";
export const TodosContext = createContext();

const TodosProvider = (props) => {
  const initialTodos = [{ id: 1, task: "Eat cow", completed: false }];
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
