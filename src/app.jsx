import React from "react";
import "./app.css";
import Navbar from "./navbar";
import Form from "./form";
import PageContent from "./pageContent";
const App = (props) => {
  return (
    <PageContent>
      <Navbar />
      <Form />
    </PageContent>
  );
};

export default App;
