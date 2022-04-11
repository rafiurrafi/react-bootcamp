import React, { useState } from "react";
import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import "./portfolioApp.scss";
import Works from "./components/works/works";
import Testimonial from "./components/testimonial/testimonial";
import Contact from "./components/contact/contact";
// @materialui-icons
const PortfolioApp = () => {
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div className="portfolio-app">
      <Topbar openMenu={openMenu} onOpenMenu={setOpenMenu} />
      <section className="sections">
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
