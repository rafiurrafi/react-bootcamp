import { Paper } from "@material-ui/core";
import React from "react";
import Todo from "./todo";

const TodoList = ({ todos }) => {
  return (
    <Paper>
      {todos.map((todo) => (
        <Todo key={todo.id} task={todo.task} />
      ))}
    </Paper>
  );
};

export default TodoList;
