import React, { useState } from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditForm from "./editForm";
const TodoList = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const { todo, onToggleTodos, onDeleteTodos, onEditTodos } = props;
  const { completed } = todo;
  function handleToggleEdit() {
    setIsEditing(!isEditing);
  }
  return (
    <>
      {isEditing ? (
        <EditForm
          todo={todo}
          onToggleEdit={handleToggleEdit}
          onEditTodos={onEditTodos}
        />
      ) : (
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
            <IconButton onClick={handleToggleEdit}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </>
  );
};

export default TodoList;
