import React from "react";
import "./app.css";
import Navbar from "./navbar";
import Form from "./form";
import PageContent from "./pageContent";
import ThemeProvider from "./contexts/ThemeContext";
const App = (props) => {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  );
};

export default App;
