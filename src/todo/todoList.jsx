import { Paper } from "@material-ui/core";
import { List } from "@material-ui/core";

import React from "react";
import Todo from "./todo";
const TodoList = ({ todos, onRemoveTodos }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} onRemoveTodos={onRemoveTodos} />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
