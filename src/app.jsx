import React from "react";
import "./app.css";
import Header from "./components/header";
import SlideContainer from "./components/slideContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SlideContainer />
      </div>
    );
  }
}

export default App;
