import React from "react";
import { Divider, ListItem, ListItemText } from "@material-ui/core";

const Todo = ({ task }) => {
  return (
    <>
      <ListItem>
        <ListItemText>{task}</ListItemText>
      </ListItem>
      <Divider />
    </>
  );
};

export default Todo;
