import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ProductContext } from "../../contexts/shop.context";

const Shop = () => {
  const { products } = useContext(ProductContext);
  const { addCartItem } = useContext(CartContext);
  return (
    <div>
      {products.map((data) => (
        <div key={data.id}>
          <h4>{data.name}</h4>
          <button onClick={() => addCartItem(data)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
