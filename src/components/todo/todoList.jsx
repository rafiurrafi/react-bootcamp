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
class TodoList extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <ListItem>
        <Checkbox />
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
  }
}

export default TodoList;
