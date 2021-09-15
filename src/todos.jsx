import { List } from "@material-ui/core";
import React from "react";
import TodoList from "./TodoList";

const Todos = (props) => {
  const { todos, onRemoveTodos, onToggleTodos } = props;
  return (
    <List>
      {todos.map((todo) => (
        <TodoList
          key={todo._id}
          todo={todo}
          onRemoveTodos={onRemoveTodos}
          onToggleTodos={onToggleTodos}
        />
      ))}
    </List>
  );
};

export default Todos;
