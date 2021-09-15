import { TextField } from "@material-ui/core";
import useInputHook from "./hooks/useInputHooks";
import React from "react";

const TodoEditForm = ({ todo, onEditTodos }) => {
  const [task, setTask] = useInputHook(todo.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    onEditTodos(todo._id, task);
    setTask();
  };
  console.log(task);
  return (
    <form onSubmit={handleSubmit}>
      <TextField value={task} onChange={setTask} fullWidth />
    </form>
  );
};

export default TodoEditForm;
