export const selectCartItems = (state) => state.cart;
export const selectIsCartOpen = (state) => state.cart.isCartOpen;

export const newCartCount = (state) =>
  state.cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

export const newCartTotal = (state) =>
  state.cart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
