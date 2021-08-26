import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import TodoList from "./todoList";
const useStyles = makeStyles((theme) => ({
  toolbarMargin: theme.mixins.toolbar,
}));
const TodoApp = (props) => {
  const initialTodos = [{ _id: 1, task: "Feed cow", completed: true }];
  const classes = useStyles();
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar>
        <Toolbar>
          <Typography variant="title">Todo</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <TodoList todos={todos} />
    </Paper>
  );
};

export default TodoApp;
// --App
//     --TodoApp
//         --todoList
//             --todo
//             --edit todo
//         --todoform
