import React, { Component, createContext } from "react";

export const ThemeContext = createContext();
class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: true,
    };
    this.handleThemeChange = this.handleThemeChange.bind(this);
  }
  handleThemeChange() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, onThemeChange: this.handleThemeChange }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
