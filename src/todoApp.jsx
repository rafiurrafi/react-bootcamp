import React from "react";
import Navbar from "./components/navbar";
import Todos from "./todos";
import TodoForm from "./todoForm";
import { Grid, Paper } from "@material-ui/core";
import ThemeProvider from "./contexts/todos.context";
const TodoApp = (props) => {
  return (
    <div>
      <Navbar />
      <Paper>
        <ThemeProvider>
          <Grid container justifyContent="center">
            <Grid item xs={10} md={6} lg={4}>
              <TodoForm />
            </Grid>
            <Grid item xs={10} md={6} lg={4}>
              <Todos />
            </Grid>
          </Grid>
        </ThemeProvider>
      </Paper>
    </div>
  );
};

export default TodoApp;
