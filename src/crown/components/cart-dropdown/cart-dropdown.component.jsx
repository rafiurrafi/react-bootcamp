import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";

const CartDropdown = () => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">items</div>

      <Button onClick={() => navigate("/checkout")}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
