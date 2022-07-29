import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(cartContext);
  return <div onClick={() => setIsCartOpen(!isCartOpen)}>Icon</div>;
};

export default CartIcon;
