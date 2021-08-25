import { Paper, TextField } from "@material-ui/core";
import React from "react";
import useInputHooks from "./hooks/useInputHooks";
const TodoForm = (props) => {
  const [value, handleChange, reset] = useInputHooks("");
  return (
    <Paper>
      <TextField value={value} onChange={handleChange} />
    </Paper>
  );
};

export default TodoForm;
