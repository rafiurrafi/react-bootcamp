import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  console.log(isCartOpen, setIsCartOpen);
  return (
    <div
      onClick={() => setIsCartOpen(!isCartOpen)}
      style={{ padding: "0 20px", backgroundColor: "red", cursor: "pointer" }}
    >
      <ShoppingIcon />
    </div>
  );
};

export default CartIcon;
