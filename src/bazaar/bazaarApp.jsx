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
    carts: [],
    price: 0.0,
    selectedCategory: [],
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
  filterProducts = (categories) => {
    const { products } = this.state;
    const updatedProducts = products.filter(
      (product) => categories.indexOf(product.category) > -1
    );
    this.setState({ products: updatedProducts });
  };
  handleSelectedCategory = (category) => {
    console.log(category);
    this.setState({ selectedCategory: category });
  };

  render() {
    const { carts, products, selectedCategory } = this.state;
    const filteredProduct =
      selectedCategory.length > 0
        ? products.filter(
            (product) => selectedCategory.indexOf(product.category) > -1
          )
        : products;
    return (
      <div>
        <Header />
        <Hero />
        <BannerContainer />
        <main className="home-main">
          <MenuSidebar onSelectCategory={this.handleSelectedCategory} />
          <Colleactions
            products={filteredProduct}
            onAddItemToCart={this.addItemToCart}
            onEstimatePrice={this.estimateCartPrice}
          />
        </main>
        <CardOverview products={products} carts={carts} length={carts.length} />
      </div>
    );
  }
}

export default BazaarApp;
