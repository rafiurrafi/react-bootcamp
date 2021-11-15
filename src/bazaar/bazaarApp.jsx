import React from "react";
// import SimpleSlider from "./components/bannerContainer";
import BannerContainer from "./components/bannerContainer";
import Colleactions from "./components/collections";
import Header from "./components/header";
import Hero from "./components/hero";
import MenuSidebar from "./components/menuSidebar";
import products from "./service/productService";
import "./styles/bazaarApp.scss";
class BazaarApp extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    document.title = "Bazaar - Your favorite shop";
    this.setState({ products: products });
  }
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <BannerContainer />
        {/* <SimpleSlider /> */}
        <main className="home-main">
          <MenuSidebar />
          <Colleactions products={this.state.products} />
        </main>
      </div>
    );
  }
}

export default BazaarApp;
