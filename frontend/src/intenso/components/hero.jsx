import React from "react";
import HeroContent from "./heroContent";
import HeroForm from "./heroForm";

import "../styles/hero.scss";

const Hero = (props) => {
  return (
    <section className="section-hero">
      <HeroContent />
      <HeroForm />
    </section>
  );
};

export default Hero;
