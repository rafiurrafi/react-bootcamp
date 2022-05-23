import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../contexts/product.context";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="shop">
      <h1>Shop page</h1>
      <div className="products">
        {products.map(({ id, ...props }) => (
          <ProductCard key={id} product={props} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
