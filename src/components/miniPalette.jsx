import React from "react";
import { withStyles } from "@material-ui/styles";
const styles = {
  root: {
    backgroundColor: "white",
    position: "relative",
  },
  main: {
    backgroundColor: "gray",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  main: {
    display: "flex",
    width: "100%",
    height: "150px",
  },
  miniColors: {
    height: "15px",
    width: "20%",
    display: "inline-block",
  },
};
const MiniPalette = (props) => {
  const { classes, paletteName: name, emoji, colors } = props;
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        {colors.map((color) => (
          <div
            className={classes.miniColors}
            style={{ backgroundColor: color.color }}
          ></div>
        ))}
      </div>
      <h5 className={classes.title}>
        {name} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
