import React from "react";
// import SimpleSlider from "./components/bannerContainer";
import BannerContainer from "./components/bannerContainer";
import CartDetails from "./components/cartDetails";
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
    searchText: "",
    showCartDetails: false,
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

  handleSelectedCategory = (category) => {
    this.setState({ selectedCategory: category, searchText: "" });
  };
  handleSearchText = (text) => {
    this.setState({ searchText: text, selectedCategory: [] });
  };
  handleShowCartDetails = () => {
    this.setState({ showCartDetails: !this.state.showCartDetails });
  };
  render() {
    const { carts, products, selectedCategory, searchText, showCartDetails } =
      this.state;
    const filteredProduct =
      selectedCategory.length > 0
        ? products.filter(
            (product) => selectedCategory.indexOf(product.category) > -1
          )
        : products;
    const filteredSearch = filteredProduct.filter((product) =>
      product.name.includes(searchText)
    );
    return (
      <div className="home">
        <Header />
        <Hero onSearchText={this.handleSearchText} />
        <BannerContainer />
        <main className="home-main">
          <MenuSidebar onSelectCategory={this.handleSelectedCategory} />
          <Colleactions
            products={filteredSearch}
            onAddItemToCart={this.addItemToCart}
            onEstimatePrice={this.estimateCartPrice}
          />
        </main>
        <CardOverview
          products={products}
          carts={carts}
          length={carts.length}
          onShowDetails={this.handleShowCartDetails}
        />
        <CartDetails carts={carts} showDetails={showCartDetails} />
      </div>
    );
  }
}

export default BazaarApp;
