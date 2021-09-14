import React, { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";

const PageContent = (props) => {
  const context = useContext(ThemeContext);
  const { isDarkMode } = context;
  const styles = {
    backgroundColor: isDarkMode ? "#000" : "#fff",
    minHeight: "100vh",
    width: "100vw",
  };
  return <div style={styles}>{props.children}</div>;
};

export default PageContent;

// class PageContent extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isDarkMode } = this.context;
//     const styles = {
//       backgroundColor: isDarkMode ? "#000" : "#fff",
//       minHeight: "100vh",
//       width: "100vw",
//     };
//     return <div style={styles}>{this.props.children}</div>;
//   }
// }

// export default PageContent;
