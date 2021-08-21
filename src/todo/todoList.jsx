import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  deleteIcon: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
});

const initialTodos = [
  { _id: 1, task: "Feed cow", completed: false },
  { _id: 2, task: "Sleep cow", completed: true },
  { _id: 3, task: "Drink cow", completed: false },
  { _id: 4, task: "Gaze cow", completed: false },
];
const TodoList = (props) => {
  const { classes } = props;
  const [todos, setTodos] = useState(initialTodos);
  const handleDelete = (_id) => {
    const copiedTodos = todos.filter((t) => t._id !== _id);
    setTodos(copiedTodos);
  };
  const handleComplete = (id) => {
    const newTodos = [...todos];
    const todoItem = newTodos.find((t) => t._id === id);
    if (todoItem.completed) todoItem.completed = false;
    else todoItem.completed = true;
    setTodos(newTodos);
  };
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo._id}>
          <ListItemText>
            {todo.completed ? <del>{todo.task}</del> : <span>{todo.task}</span>}
          </ListItemText>
          <button
            onClick={() => handleComplete(todo._id)}
            className={classes.deleteIcon}
          >
            OK
          </button>
          <button
            onClick={() => handleDelete(todo._id)}
            className={classes.deleteIcon}
          >
            X
          </button>
        </ListItem>
      ))}
    </List>
  );
};

export default withStyles(styles)(TodoList);
