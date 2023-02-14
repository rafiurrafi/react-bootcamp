import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Dropdown = () => {
  const style = {
    height: "300px",
    width: "200px",
    border: "1px solid red",
    position: "absolute",
    right: "0",
    top: "3rem",
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div style={style}>
      {/* {cartItems.map((item) => (
        <div key={item.id}>
          {item.name} x {item.quantity}
        </div>
      ))} */}
    </div>
  );
};

export default Dropdown;
