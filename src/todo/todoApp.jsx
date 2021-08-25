import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import TodoList from "./todoList";
import TodoForm from "./todoForm";
import uuid from "uuid/v4";
const TodoApp = (props) => {
  const initialTodos = [
    { _id: uuid(), task: "Feed cow", completed: false },
    { _id: uuid(), task: "Gaze cow", completed: false },
    { _id: uuid(), task: "Bath cow", completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodos = (todoTask) => {
    setTodos([...todos, { _id: uuid(), task: todoTask, completed: false }]);
  };
  const removeTodos = (todoId) => {
    setTodos(todos.filter((todo) => todo._id !== todoId));
  };

  const toggleTodos = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo._id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
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
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm onAddTodo={addTodos} />
          <TodoList
            todos={todos}
            onToggleTodos={toggleTodos}
            onRemoveTodos={removeTodos}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
