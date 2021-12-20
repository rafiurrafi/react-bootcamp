import { Paper, TextField } from "@material-ui/core";
import React from "react";

const TodoForm = (props) => {
  return (
    <Paper>
      <form>
        <TextField fullWidth placeholder="Add todo" />
      </form>
    </Paper>
  );
};

export default TodoForm;
