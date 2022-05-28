import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";
const Shop = () => {
  const { products } = useContext(ProductContext);
  const style = {
    display: "grid",
    gridTemplateColumn: "repeat(3,1fr)",
  };
  return (
    <div>
      <h1>Shop</h1>
      <div className="product-cards" style={style}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
