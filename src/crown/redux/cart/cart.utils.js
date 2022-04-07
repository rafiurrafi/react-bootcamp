export const addItemToCart = (cartItems, cartItemToCart) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToCart.id
  );
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToCart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { cartItemToCart, quantity: 1 }];
};
