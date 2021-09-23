import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "./navbar";
import TodoForm from "./todoForm";
import { withStyles } from "@material-ui/styles";
import uuid from "uuid/v4";
import Todos from "./todos";

const styles = {
  spacing: {
    margin: 30,
  },
};
const TodoApp = (props) => {
  const initialTodos = [
    { _id: uuid(), task: "Todo", completed: false },
    { _id: uuid(), task: "New", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const { classes } = props;
  function addTask(task) {
    setTodos([...todos, { _id: uuid(), task, completed: false }]);
  }
  function toggleTodos(id) {
    const updatedTodos = todos.map((todo) =>
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }
  function editTodos(id, task) {
    const todos = todos.map((todo) =>
      todo._id === id ? { ...todo, task } : todo
    );
    setTodos(todos);
  }
  function deleteTodos(id) {
    const updatedTodos = todos.filter((todo) => todo._id !== id);
    setTodos(updatedTodos);
  }
  return (
    <div>
      <Navbar />
      <div className={classes.spacing} />
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={10} md={6} lg={4}>
          <TodoForm onAddTask={addTask} />
        </Grid>
        <Grid item xs={10} md={6} lg={4}>
          <Todos
            todos={todos}
            onEditTodos={editTodos}
            onToggleTodos={toggleTodos}
            onDeleteTodos={deleteTodos}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(TodoApp);
