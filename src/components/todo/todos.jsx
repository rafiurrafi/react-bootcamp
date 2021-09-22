import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { Component } from "react";

class Todos extends React.Component {
  render() {
    return (
      <Paper>
        <List>
          {this.props.todos.map((todo) => (
            <ListItem key={todo.id}>
              <Checkbox />
              <ListItemText>{todo.task}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>{" "}
      </Paper>
    );
  }
}

export default Todos;
