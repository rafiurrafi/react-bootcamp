import React, { Component, createContext } from "react";
export const LanguageContext = createContext();
class LanguageProvider extends Component {
  constructor(props) {
    super();
    this.state = {
      language: "FR",
    };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }
  handleLanguageChange(language) {
    this.setState({ language });
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{
          ...this.state,
          onlanguagechange: this.handleLanguageChange,
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
