import React from "react";
// import SimpleSlider from "./components/bannerContainer";
import BannerContainer from "./components/bannerContainer";
import CardOverview from "./components/cartOverview";
import Colleactions from "./components/collections";
import Header from "./components/header";
import Hero from "./components/hero";
import MenuSidebar from "./components/menuSidebar";
import products from "./service/productService";
import "./styles/bazaarApp.scss";
class BazaarApp extends React.Component {
  state = {
    products: [],
    carts: [{ id: "8e518f2a-a481-4e2d-b315-d553bee9d3a8", itemNumber: 0 }],
  };
  componentDidMount() {
    document.title = "Bazaar - Your favorite shop";
    this.setState({ products: products });
  }
  addItemToCart = (id) => {
    const { carts } = this.state;
    let newCarts = [...carts];
    if (newCarts.some((item) => item.id === id)) {
      newCarts.forEach((item) => {
        if (item.id === id) {
          item.itemNumber = item.itemNumber + 1;
        }
      });
      this.setState({ carts: newCarts });
    } else {
      newCarts.push({ id: id, itemNumber: 1 });
      this.setState({ carts: newCarts });
    }
  };
  getProduct(id) {
    return this.state.products.filter((product) => product.id === id);
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
          <Colleactions
            products={this.state.products}
            onAddItemToCart={this.addItemToCart}
          />
        </main>
        <CardOverview />
      </div>
    );
  }
}

export default BazaarApp;
