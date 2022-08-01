import { useContext } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { ProductsContext } from "../../contexts/products.context";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const ShopPreview = () => <h1>Shop preview</h1>;
  const ShopDetails = () => {
    const { category } = useParams();
    console.log(category);
    return (
      <div>
        <h1>{category}</h1>
      </div>
    );
  };
  return (
    // <div className='products-container'>
    //   {products.map((product) => (
    //     <ProductCard key={product.id} product={product} />
    //   ))}
    // </div>
    <Routes>
      <Route index element={<ShopPreview />} />
      <Route path=":category" element={<ShopDetails />} />
    </Routes>
  );
};

export default Shop;
