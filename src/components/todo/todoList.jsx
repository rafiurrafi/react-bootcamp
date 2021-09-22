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
    const { todo, onToggleTodos, onDeleteTodos } = this.props;
    const { completed } = todo;
    return (
      <ListItem>
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggleTodos(todo._id)}
        />
        <ListItemText
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {todo.task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton>
            <DeleteIcon onClick={() => onDeleteTodos(todo._id)} />
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
