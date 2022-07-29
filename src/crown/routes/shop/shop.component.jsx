import { useContext, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContext } from "../../contexts/category.context";

const Shop = () => {
  const { products } = useContext(CategoryContext);

  return (
    <div>
      <h1>shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
