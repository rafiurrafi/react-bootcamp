import React, { createContext, Component, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider
      value={{ isDarkMode, onThemeChange: handleThemeChange }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
