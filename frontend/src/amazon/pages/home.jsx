import React from "react";
import Banner from "../components/banner";
import Products from "../components/products";
import "../styles/home.scss";

const Home = (props) => {
  return (
    <div className="home">
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
