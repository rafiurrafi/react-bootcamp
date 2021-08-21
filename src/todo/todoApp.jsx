import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import TodoList from "./todoList";
const styles = (theme) => ({
  toolbarMargin: theme.mixins.toolbar,
});
const TodoApp = (props) => {
  const { classes } = props;
  return (
    <Paper
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        width: "100%",
        background: "#f1f1f1",
      }}
    >
      <AppBar>
        <Toolbar>
          <Typography variant="title">Title</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <TodoList />
    </Paper>
  );
};

export default withStyles(styles)(TodoApp);
