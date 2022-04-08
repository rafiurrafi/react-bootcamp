import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import "./directory.styles.scss";

function Directory({sections}) {
  return (
    <div className="directory-menu">
      {this.state.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}
const mapStateToProps = state => ({
  sections : state.directory
})
export default connect(mapStateToProps)(Directory);
