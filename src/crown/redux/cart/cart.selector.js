const selectCart = (state) => state.cart;
const selectCartItems = selectCart.cartItems;
export const selectCartTotal = selectCartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price,
  0
);
export const selectCartCount = selectCartItems.reduce(
  (total, cartItem) => total + cartItem.quantity,
  0
);
