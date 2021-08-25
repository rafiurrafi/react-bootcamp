import { Paper, TextField } from "@material-ui/core";
import React from "react";
import useInputHooks from "./hooks/useInputHooks";
const TodoForm = ({ onAddTodo }) => {
  const [value, handleChange, reset] = useInputHooks("");
  const handleSubmit = (e) => {
    e.preventDeafult();
    onAddTodo(value);
    console.log("done");
    reset();
  };
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
