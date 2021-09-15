import React from "react";
import Navbar from "./components/navbar";
import uuid from "uuid/v4";
const TodoApp = (props) => {
  const defaultTodos = [
    { _id: uuid, task: "Go home", completed: false },
    { _id: uuid, task: "Go to restaurant", completed: false },
    { _id: uuid, task: "Come  back", completed: false },
  ];
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default TodoApp;
