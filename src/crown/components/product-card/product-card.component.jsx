import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCart = ({ product }) => {
  const { imageUrl, price, name } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-cart-container">
      <img src={imageUrl} alt="" />
      <h5>{name}</h5>
      <p>{price}</p>
      <button onClick={() => addItemToCart(product)}>Add to cart</button>
    </div>
  );
};

export default ProductCart;
