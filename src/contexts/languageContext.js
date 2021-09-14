import React, { Component, createContext, useState } from "react";
import { ThemeContext } from "./themeContext";

export const LanguageContext = createContext();
const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("EN");
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <LanguageContext.Provider
      value={{ language, onLanguageChange: handleLanguageChange }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

export const withLanguageContext = (Component) => (props) => {
  return (
    <LanguageContext.Consumer>
      {(value) => <Component value={value} {...props} />}
    </LanguageContext.Consumer>
  );
};
