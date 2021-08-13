import React, { createContext, Component } from "react";
import { ThemeContext } from "./ThemeContext";
export const LanguageContext = createContext();

class LanguageProvider extends Component {
  constructor(props) {
    super();
    this.state = {
      language: "EN",
    };
  }
  render() {
    return (
      <LanguageContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
