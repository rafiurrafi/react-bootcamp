import { TextField } from "@material-ui/core";
import React, { useState } from "react";

const TodoForm = (props) => {
  const { onAddTodos } = props;
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodos(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="+Add"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
    </form>
  );
};

export default TodoForm;
