import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";

const Todo = (props) => {
  return (
    <List>
      <ListItem>{props.task}</ListItem>
      <ListItemSecondaryAction>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </List>
  );
};

export default Todo;
