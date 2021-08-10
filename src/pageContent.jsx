import React, { Component } from "react";
const styles = {
  backgroundColor: "red",
  width: "100%",
  minHeight: "100vh",
};
class PageContent extends Component {
  render() {
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
