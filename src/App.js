import React from "react";
import Counter from "./components/counter";
import Form from "./components/form";
import "./styles/App.css";
const styles = {
  padding: "30px",
};
const App = (props) => {
  return (
    <div style={styles}>
      <Form />
    </div>
  );
};

export default App;
