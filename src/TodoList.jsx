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
  const { todo, onRemoveTodos, onToggleTodos } = props;
  return (
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
        <IconButton onClick={() => onRemoveTodos(todo._id)}>
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
