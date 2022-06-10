import { useContext, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <h1>Shop</h1>
      {products.map(({ id, ...props }) => (
        <ProductCard key={id} {...props} />
      ))}
    </div>
  );
};

export default Shop;
