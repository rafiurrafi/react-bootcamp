import React from "react";
import Navbar from "./navbar";
import Form from "./form";
import PageContent from "./pageContent";
import ThemeProvider from "./contexts/themeContext";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    );
  }
}

export default App;
