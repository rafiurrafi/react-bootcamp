import React from "react";
const Todo = (props) => {
  const [isEditing, setIsEditing] = React.useState(false);
  function handleUpdate(e) {
    e.preventDefault();
    setIsEditing();
  }
  let result;
  if (!isEditing) {
    result = (
      <div>
        <button>Edit</button>
        <button onClick={props.onRemove}>X</button>
        <li>{props.task}</li>
      </div>
    );
  } else {
    result = (
      <div>
        <form onSubmit={this.handleUpdate}>
          <input type="text" />
          <button>update</button>
        </form>
      </div>
    );
  }
  return (
    <div>
      <button>Edit</button>
      <button onClick={props.onRemove}>X</button>
      <li>{props.task}</li>
    </div>
  );
};

export default Todo;
