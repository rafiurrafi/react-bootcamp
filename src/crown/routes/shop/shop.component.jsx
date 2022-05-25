import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/categoryPreview.component";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="products-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        <CategoryPreview key={title} products={products} title={title} />;
      })}
      {/* {products.map((product) => (
      ))} */}
    </div>
  );
};

export default Shop;
