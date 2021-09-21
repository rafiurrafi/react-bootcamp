import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">TodoList</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
