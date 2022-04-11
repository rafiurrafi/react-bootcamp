import React from "react";
import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import "./portfolioApp.scss";
import Works from "./components/works/works";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
const PortfolioApp = () => {
  return (
    <div className="portfolio-app">
      <Topbar />
      <section>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonial />
        <Contact />
      </section>
    </div>
  );
};

export default PortfolioApp;
