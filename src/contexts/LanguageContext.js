import React, { createContext, useState } from "react";
export const LanguageContext = createContext();
const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("EN");
  const handleLanguageChange = (e) => {
    setLanguage({ language: e.target.value });
  };
  return (
    <LanguageContext.Provider
      value={{ language, onLanguageChange: handleLanguageChange }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export const withLanguageContext = (Component) => (props) => {
  return (
    <LanguageContext.Consumer>
      {(value) => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
  );
};
export default LanguageProvider;
