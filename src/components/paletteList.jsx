import React from "react";
import { Link } from "react-router-dom";

class PaletteList extends React.Component {
  render() {
    return (
      <div>
        {this.props.palette.map((p) => (
          <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
        ))}
      </div>
    );
  }
}

export default PaletteList;
