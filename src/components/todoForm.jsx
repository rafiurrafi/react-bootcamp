import React from "react";
import { Paper, TextField } from "@material-ui/core";
const TodoForm = (props) => {
  return (
    <Paper>
      <form>
        <TextField fullWidth label="Add new todo" />
      </form>
    </Paper>
  );
};

export default TodoForm;
