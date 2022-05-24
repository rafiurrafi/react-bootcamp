import { useContext } from "react";
import ProductCart from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <h1>Shop</h1>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCart product={product} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
