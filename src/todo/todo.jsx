import React from "react";
import {
  Checkbox,
  Divider,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
// import { DeleteIcon, EditIcon } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
const Todo = ({ todo, onRemoveTodos, onToggleTodos }) => {
  return (
    <>
      <ListItem>
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggleTodos(todo._id)}
        />
        <ListItemText
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon onClick={() => onRemoveTodos(todo._id)} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
};

export default Todo;
