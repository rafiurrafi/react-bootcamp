import React from "react";
import "./app.css";
import Navbar from "./navbar";
import Form from "./form";
import PageContent from "./pageContent";
import ThemeProvider from "./contexts/ThemeContext";
import LanguageProvider from "./contexts/LanguageContext";
const App = (props) => {
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
};

export default App;
