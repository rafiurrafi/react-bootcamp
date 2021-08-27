import React from "react";
import { Paper, TextField } from "@material-ui/core";
import useInputHooks from "./hooks/useInputHooks";
const TodoForm = (props) => {
  const [task, setTask, reset] = useInputHooks("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTodos(task);
    reset();
  };
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField
          value={task}
          onChange={setTask}
          fullWidth
          label="Add new todo"
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
