import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.component";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return (
    <div
      onClick={() => setIsCartOpen(!isCartOpen)}
      className="cart-icon"
      style={{ padding: "0 20px", backgroundColor: "gray", cursor: "pointer" }}
    >
      <ShoppingIcon />
      <p>0</p>
    </div>
  );
};

export default CartIcon;
