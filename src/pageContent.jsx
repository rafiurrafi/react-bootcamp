import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
class PageContent extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "#000" : "#fff",
      minHeight: "100vh",
      width: "100%",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
