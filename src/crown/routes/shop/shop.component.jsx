import { Fragment, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../../components/category-preview/categoryPreview.component";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="products-container">
      <Routes>
        <Route index element={<CategoryPreview />} />
        <Route path="" element={<Category />} />
      </Routes>
      {/* {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        <CategoryPreview key={title} products={products} title={title} />;
      })} */}
    </div>
  );
};

export default Shop;
