import { TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { ThemeContext } from "./contexts/todos.context";
const TodoForm = (props) => {
  const [addTodos] = useContext(ThemeContext);
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(task);
    setTask("");
  };
  console.log(useContext(ThemeContext));
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
