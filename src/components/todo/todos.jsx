import { List, Paper } from "@material-ui/core";
import React from "react";
import TodoList from "./todoList";

const Todos = (props) => {
  const { todos, onToggleTodos, onDeleteTodos, onEditTodos } = props;
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <TodoList
            key={todo.key}
            todo={todo}
            onEditTodos={onEditTodos}
            onToggleTodos={onToggleTodos}
            onDeleteTodos={onDeleteTodos}
          />
        ))}
      </List>{" "}
    </Paper>
  );
};

export default Todos;
