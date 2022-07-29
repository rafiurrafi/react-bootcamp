import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(cartContext);
  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.map((item) => (
        <div>
          <h5>{item.name}</h5>
          <button onClick={() => addItemToCart(item)}>+</button>
          {item.quantity}
          <button onClick={() => removeItemFromCart(item)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
