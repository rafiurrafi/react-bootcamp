import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeProvider extends Component {
  render() {
    return (
      <ThemeContext.Provider value={{ testedLikeChicken: true }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
