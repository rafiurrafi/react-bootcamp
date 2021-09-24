import React, { useContext, useState } from "react";
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
import { TodosContext } from "./contexts/todos.context";
const TodoList = (props) => {
  const todosContext = useContext(TodosContext);
  const { toggleTodos, deleteTodos } = todosContext;
  const [isEditing, setIsEditing] = useState(false);
  const { todo } = props;
  const { completed } = todo;
  function handleToggleEdit() {
    setIsEditing(!isEditing);
  }
  return (
    <>
      {isEditing ? (
        <EditForm todo={todo} onToggleEdit={handleToggleEdit} />
      ) : (
        <ListItem>
          <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodos(todo._id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {todo.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton>
              <DeleteIcon onClick={() => deleteTodos(todo._id)} />
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
