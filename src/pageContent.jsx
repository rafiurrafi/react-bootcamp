import React, { Component } from "react";
class PageContent extends Component {
  render() {
    const styles = {
      backgroundColor: "red",
      minHeight: "100vh",
      width: "100%",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
