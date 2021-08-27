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
const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <ListItem key={todo._id}>
              <Checkbox checked={todo.completed} />
              <ListItemText
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.task}
              </ListItemText>
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <EditIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
