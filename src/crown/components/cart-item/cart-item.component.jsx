const CartItem = ({ name, quantity }) => {
  return (
    <div className="cart-items">
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
