import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
const TodoApp = (props) => {
  const initialTodos = [{ _id: 1, task: "Feed cow", completed: true }];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "red",
      }}
    ></Paper>
  );
};

export default TodoApp;
// --App
//     --TodoApp
//         --todoList
//             --todo
//             --edit todo
//         --todoform
