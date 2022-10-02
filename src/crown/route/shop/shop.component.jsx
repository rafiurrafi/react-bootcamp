import { useContext } from "react";
import { ProductContext } from "../../context/products.component";
import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <h1>Shop page</h1>
      <div className="single-products">
        {products.map((product) => (
          <div className="single-product">
            <h4>{product.name}</h4>
            <img src={product.imageUrl} alt="" />
            <button>add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
