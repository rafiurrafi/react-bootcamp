import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className="product-card">
      <img src={imageUrl} alt="" />
      <h3>{name}</h3>
      <p>{price}</p>
      <Button onClick={() => addItemToCart(product)}>Add item</Button>
    </div>
  );
};

export default ProductCard;
