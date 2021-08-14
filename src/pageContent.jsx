import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
const PageContent = (props) => {
  const themeContext = useContext(ThemeContext);
  const { isDarkMode } = themeContext;
  const styles = {
    backgroundColor: isDarkMode ? "#000" : "#fff",
    minHeight: "100vh",
    width: "100%",
  };
  return <div style={styles}>{props.children}</div>;
};

export default PageContent;
