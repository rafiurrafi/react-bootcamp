import { useContext } from "react";
import ProductCart from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <h1>Shop</h1>
      {products.map(({ id, ...props }) => (
        <div key={id}>
          <ProductCart {...props} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
