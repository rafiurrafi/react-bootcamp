import { List } from "@material-ui/core";
import React, { useContext } from "react";
import { ThemeContext } from "./contexts/todos.context";
import TodoList from "./TodoList";

const Todos = (props) => {
  const { todos } = useContext(ThemeContext);
  return (
    <List>
      {todos.map((todo) => (
        <TodoList key={todo._id} />
      ))}
    </List>
  );
};

export default Todos;
