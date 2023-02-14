import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return <div onClick={() => setIsCartOpen(!isCartOpen)}>Cart icon</div>;
};

export default CartIcon;
