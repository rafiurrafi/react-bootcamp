import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
const initialTodos = [
  { _id: 1, task: "Feed cow", completed: false },
  { _id: 2, task: "Sleep cow", completed: false },
  { _id: 3, task: "Drink cow", completed: false },
  { _id: 4, task: "Gaze cow", completed: false },
];
const TodoList = (props) => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo._id}>
          <ListItemText>{todo.task}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
