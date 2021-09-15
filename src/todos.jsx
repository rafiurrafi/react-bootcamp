import { List } from "@material-ui/core";
import React from "react";
import TodoList from "./TodoList";

const Todos = (props) => {
  const { todos } = props;
  return (
    <List>
      {todos.map((todo) => (
        <TodoList todo={todo} />
      ))}
    </List>
  );
};

export default Todos;
