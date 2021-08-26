import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";
import React from "react";
const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <ListItem key={todo._id}>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
