import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = (props) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography varinat="h5">Todo App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
