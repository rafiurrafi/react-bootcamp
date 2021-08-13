import React, { createContext, Component } from "react";
export const LanguageContext = createContext();

class LanguageProvider extends Component {
  constructor(props) {
    super();
    this.state = {
      language: "EN",
    };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }
  handleLanguageChange(e) {
    this.setState({ language: e.target.value });
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, onLanguageChange: this.handleLanguageChange }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
