import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import TodoList from "./todoList";
const TodoApp = (props) => {
  const initialTodos = [
    { _id: 1, task: "Feed cow", completed: false },
    { _id: 2, task: "Gaze cow", completed: false },
    { _id: 3, task: "Bath cow", completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#fafafa",
        minHeight: "100vh",
        width: "100%",
      }}
      elevation={0}
    >
      <AppBar position="static" color="primary" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS with hooks</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
};

export default TodoApp;
