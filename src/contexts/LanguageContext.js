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
  handleLanguageChange(e) {
    console.log(e.target.value);
    this.setState({ language: e.target.value });
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{
          ...this.state,
          onLanguageChange: this.handleLanguageChange,
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
