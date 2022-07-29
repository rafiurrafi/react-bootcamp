export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartCount = cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity,
  0
);

export const selectCartTotal = cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price,
  0
);
