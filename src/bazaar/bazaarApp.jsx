import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import "./styles/bazaarApp.scss";
class BazaarApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
      </div>
    );
  }
}

export default BazaarApp;
