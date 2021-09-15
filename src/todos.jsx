import { List } from "@material-ui/core";
import React from "react";
import TodoList from "./TodoList";

const Todos = (props) => {
  const { todos, onRemoveTodos, onToggleTodos, onEditTodos } = props;
  return (
    <List>
      {todos.map((todo) => (
        <TodoList
          key={todo._id}
          todo={todo}
          onRemoveTodos={onRemoveTodos}
          onToggleTodos={onToggleTodos}
          onEditTodos={onEditTodos}
        />
      ))}
    </List>
  );
};

export default Todos;
