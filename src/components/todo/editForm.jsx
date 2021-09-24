import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
const EditForm = (props) => {
  const [task, setTask] = useState("");
  useEffect(() => {
    setTask(props.todo.task);
    console.log(task);
  }, []);
  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onEditTodos(props.todo._id, task);
    props.onToggleEdit();
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField fullWidth value={task} onChange={handleChange} />
    </form>
  );
};

export default EditForm;
