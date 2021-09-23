import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">TodoList</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
