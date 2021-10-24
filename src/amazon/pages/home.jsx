import React from "react";
import Banner from "../components/banner";
import Product from "../components/product";
import "../styles/home.scss";

const Home = (props) => {
  return (
    <div className="home">
      <Banner />
      <Product
        title="Learn React hooks"
        price="20.1"
        rating={3}
        imgSrc="https://st.depositphotos.com/1744418/1931/i/600/depositphotos_19318773-stock-photo-book-page-in-heart-shape.jpg"
      />
    </div>
  );
};

export default Home;
