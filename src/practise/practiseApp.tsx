import React from "react";
import TodoList from "./component/todoList";

const PractiseApp: React.FC = () => {
  const todos = [{ id: 1, title: "Go home" }];

  return (
    <div>
      <TodoList items={todos} />
    </div>
  );
};
export default PractiseApp;
