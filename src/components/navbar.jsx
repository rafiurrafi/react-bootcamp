import React from "react";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  toolbarMargin: theme.mixins.toolbar,
});

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">Todo</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </div>
  );
};

export default withStyles(styles)(Navbar);
