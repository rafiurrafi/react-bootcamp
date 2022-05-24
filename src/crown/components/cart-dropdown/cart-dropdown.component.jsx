import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div
      className="dropdown"
      style={{ position: "absolute", top: 100, right: 0 }}
    >
      <Button>Go Checkout</Button>
    </div>
  );
};

export default CartDropdown;
