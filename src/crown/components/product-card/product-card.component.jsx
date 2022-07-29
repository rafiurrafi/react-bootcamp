import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { cartItems, addItemToCart } = useContext(cartContext);

  return (
    <div>
      <img src={imageUrl} style={{ height: 300 }} alt="" />
      <h5>{name}</h5>
      <p>{price}</p>
      <button onClick={() => addItemToCart(product)}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
