import { TextField, Paper } from "@material-ui/core";
import React, { useState } from "react";
const TodoForm = (props) => {
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddTask(task);
    setTask("");
  }
  function handleChange(e) {
    setTask(e.target.value);
  }
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField value={task} onChange={handleChange} fullWidth />
      </form>
    </Paper>
  );
};

export default TodoForm;
