import React, { Component, createContext } from "react";

export const ThemeContext = createContext();
class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, testedLikeChicken: true }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
