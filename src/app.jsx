import React from "react";
import "./app.css";
import Footer from "./components/footer";
import Header from "./components/header";
import SlideContainer from "./components/slideContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SlideContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
