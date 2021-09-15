import React from "react";
import Navbar from "./components/navbar";
import uuid from "uuid/v4";
import { useState } from "react";
import Todos from "./todos";
const TodoApp = (props) => {
  const defaultTodos = [
    { _id: uuid, task: "Go home", completed: false },
    { _id: uuid, task: "Go to restaurant", completed: false },
    { _id: uuid, task: "Come  back", completed: false },
  ];
  const [todos, setTodos] = useState(defaultTodos);
  return (
    <div>
      <Navbar />
      <Todos todos={todos} />
    </div>
  );
};

export default TodoApp;
