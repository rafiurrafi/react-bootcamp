import React from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const TodoList = (props) => {
  const { todo } = props;
  return (
    <ListItem>
      <Checkbox checked={false} />
      <ListItemText>{todo.task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoList;
