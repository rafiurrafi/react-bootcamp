import { TextField } from "@material-ui/core";
import useInputHook from "./hooks/useInputHooks";
import React, { useContext } from "react";
import { ThemeContext } from "./contexts/todos.context";

const TodoEditForm = (props) => {
  const [todo, editTodos] = useContext(ThemeContext);
  const [task, setTask] = useInputHook(todo.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodos(todo._id, task);
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
