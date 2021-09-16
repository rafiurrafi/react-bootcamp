import React, { useContext } from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggleHook from "./hooks/useToggleHook";
import TodoEditForm from "./todoEditForm";
import { ThemeContext } from "./contexts/todos.context";

const TodoList = (props) => {
  const { todo, removeTodos, toggleTodos } = useContext(ThemeContext);
  const [openEditForm, setOpenEditForm] = useToggleHook(false);
  return (
    <div>
      {openEditForm ? (
        <TodoEditForm />
      ) : (
        <ListItem>
          <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodos(todo._id)}
          />
          <ListItemText
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={() => removeTodos(todo._id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={setOpenEditForm}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}{" "}
    </div>
  );
};

export default TodoList;
