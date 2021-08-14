import React from "react";
import "./app.css";
import TodoLists from "./todo/todoLists";
const App = (props) => {
  return (
    <div className="App">
      <TodoLists />
    </div>
  );
};

export default App;
