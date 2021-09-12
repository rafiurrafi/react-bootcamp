import React, { createContext } from "react";

export const ThemeContext = createContext();

class ThemeProvider extends React.Component {
  render() {
    return <ThemeContext.Provider>{this.props.children}</ThemeContext.Provider>;
  }
}

export default ThemeProvider;
