import React from "react";
import "../styles/hero.scss";
const Hero = (props) => {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__heading">Groceries Delivered in 90 Minute</h1>
        <p className="hero__text">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>
        <form className="hero__form">
          <input
            className="hero__input"
            placeholder="Search your product from here"
          />
          <button className="hero__submit">
            <i className="fa fa-search"></i> Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
