import React from "react";
import Paper from "@material-ui/core/Paper";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
const TodoApp = (props) => {
  return (
    <Paper
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#fafafa",
        minHeight: "100vh",
        width: "100%",
      }}
      elevation={0}
    >
      <AppBar position="static" color="primary" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS with hooks</Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default TodoApp;
