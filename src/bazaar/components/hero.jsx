import React, { useState } from "react";
import "../styles/hero.scss";
const Hero = (props) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    props.onSearchText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__heading">Groceries Delivered in 90 Minute</h1>
        <p className="hero__text">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>
        <form className="hero__form" onSubmit={handleSubmit}>
          <input
            className="hero__input"
            value={search}
            onChange={handleSearch}
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
