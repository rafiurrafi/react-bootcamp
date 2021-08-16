import React from "react";
const Todo = (props) => {
  return (
    <div>
      <button>Edit</button>
      <button onClick={props.onRemove}>X</button>
      <li>{props.task}</li>
    </div>
  );
};

export default Todo;
