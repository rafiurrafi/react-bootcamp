import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h2>Checkout page</h2>
      {cartItems.map((item) => (
        <h4>{item.name}</h4>
      ))}
    </div>
  );
};

export default Checkout;
