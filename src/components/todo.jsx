import React from "react";
import {
  Checkbox,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "./hooks/useToggle";

const Todo = ({ todo }) => {
  const [isComplete, setIsComplete] = useToggle(() => false);
  console.log(todo);
  return (
    <>
      <ListItem key={todo._id}>
        <Checkbox checked={isComplete} onChange={setIsComplete} />
        <ListItemText
          style={{
            textDecoration: isComplete ? "line-through" : "none",
          }}
        >
          {todo.task}
        </ListItemText>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default Todo;
