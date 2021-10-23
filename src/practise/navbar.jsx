import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="heading">Todo App</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
