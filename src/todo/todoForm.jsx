import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: "1rem",
    marginLeft: "5px",
  },
}));
const TodoForm = (props) => {
  const classes = useStyles();
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          value={task}
          onChange={(e) => setTask(e.target.task)}
          label="AddItem"
        />
        <Button className={classes.btn} variant="contained" color="primary">
          +Add
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
