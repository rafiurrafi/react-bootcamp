import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div
      className="dropdown"
      style={{ position: "absolute", top: 100, right: 0 }}
    >
      {cartItems.map(({ id, ...props }) => (
        <CartItem key={id} {...props} />
      ))}
      <Button>Go Checkout</Button>
    </div>
  );
};

export default CartDropdown;
