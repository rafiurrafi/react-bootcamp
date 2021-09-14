import React, { createContext } from "react";

export const LanguageContext = createContext();

class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "FR",
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
