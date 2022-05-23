import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return (
    <div
      onClick={() => setIsCartOpen(!isCartOpen)}
      style={{ marginRight: "20px", backgroundColor: "red" }}
    >
      <ShoppingIcon />
      <span>0</span>
    </div>
  );
};

export default CartIcon;
