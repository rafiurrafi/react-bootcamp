import React from "react";
import Counter from "./components/counter";
import "./styles/App.css";
const styles = {
  padding: "30px",
};
const App = (props) => {
  return (
    <div style={styles}>
      <Counter />
    </div>
  );
};

export default App;
