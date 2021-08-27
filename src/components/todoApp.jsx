import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import TodoList from "./todoList";
import TodoForm from "./todoForm";
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
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
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
