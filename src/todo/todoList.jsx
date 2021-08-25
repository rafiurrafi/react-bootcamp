import { Paper } from "@material-ui/core";
import { List } from "@material-ui/core";

import React from "react";
import Todo from "./todo";
const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <Todo task={todo.task} />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
