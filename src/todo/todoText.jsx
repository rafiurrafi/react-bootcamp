import React from "react";
const TodoText = (props) => {
  return (
    <>
      {" "}
      <p>Title</p>
      <div>
        <a onClick={props.onOpenForm}>
          <i className="fa fa-pencil"></i>
        </a>
        <a href>
          <i className="fa fa-trash"></i>
        </a>
      </div>
    </>
  );
};

export default TodoText;
