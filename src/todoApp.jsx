import React from "react";
import Navbar from "./components/navbar";
import uuid from "uuid/v4";
import { useState } from "react";
import Todos from "./todos";
import TodoForm from "./todoForm";
import { Grid, Paper } from "@material-ui/core";
const TodoApp = (props) => {
  const defaultTodos = [
    { _id: uuid, task: "Go home", completed: false },
    { _id: uuid, task: "Go to restaurant", completed: false },
    { _id: uuid, task: "Come  back", completed: false },
  ];
  const [todos, setTodos] = useState(defaultTodos);
  const addTodos = (task) => {
    const newTodos = [...todos, { _id: uuid(), task: task, completed: false }];
    setTodos(newTodos);
  };
  return (
    <div>
      <Navbar />
      <Paper>
        <Grid container justifyContent="center">
          <Grid item xs={10} md={6} lg={4}>
            <TodoForm onAddTodos={addTodos} />
          </Grid>
          <Grid item xs={10} md={6} lg={4}>
            <Todos todos={todos} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default TodoApp;
