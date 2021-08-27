import {
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import useToggle from "./hooks/useToggle";
import Todo from "./todo";
const TodoList = ({ todos }) => {
  const [isComplete, setIsComplete] = useToggle();
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
