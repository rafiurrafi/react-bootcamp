import { Divider, Paper } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";

import React from "react";
const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <ListItem>
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
