const CartItem = ({ name, quantity }) => {
  return (
    <div>
      <p>{name}</p> <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
