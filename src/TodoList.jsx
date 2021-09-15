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
import useToggleHook from "./hooks/useToggleHook";
import TodoEditForm from "./todoEditForm";

const TodoList = (props) => {
  const { todo, onRemoveTodos, onToggleTodos, onEditTodos } = props;
  const [openEditForm, setOpenEditForm] = useToggleHook(false);
  return (
    <div>
      {openEditForm ? (
        <TodoEditForm todo={todo} onEditTodos={onEditTodos} />
      ) : (
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
