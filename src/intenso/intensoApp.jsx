import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import "./styles/intensoApp.scss";
const IntensoApp = (props) => {
  return (
    <div className="container">
      <Header />
      <main className="home-main">
        <Hero />
      </main>
    </div>
  );
};

export default IntensoApp;
