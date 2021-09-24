import { TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "./contexts/todos.context";
const EditForm = (props) => {
  const [task, setTask] = useState("");
  const todosContext = useContext(TodosContext);
  const { editTodos } = todosContext;
  useEffect(() => {
    setTask(props.todo.task);
    console.log(task);
  }, []);
  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    editTodos(props.todo._id, task);
    props.onToggleEdit();
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField fullWidth value={task} onChange={handleChange} />
    </form>
  );
};

export default EditForm;
