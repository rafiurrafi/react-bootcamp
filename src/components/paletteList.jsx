import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./miniPalette";
import { withStyles } from "@material-ui/styles";
const styles = {
  root: {
    height: "100vh",
    backgroundColor: "blue",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "70%",
  },
  palettes: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1rem",
  },
};
class PaletteList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Colors</h1>
            <Link to="/palette/new">Create color</Link>
          </nav>
          <div className={classes.palettes}>
            {this.props.palette.map((p) => (
              <Link to={`/palette/${p.id}`}>
                <MiniPalette {...p} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
