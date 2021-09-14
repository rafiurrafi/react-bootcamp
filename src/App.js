import React from "react";
import Navbar from "./navbar";
import Form from "./form";
import PageContent from "./pageContent";
import ThemeProvider from "./contexts/themeContext";
import LanguageProvider from "./contexts/languageContext";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <LanguageProvider>
            <Navbar />
            <Form />
          </LanguageProvider>
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
