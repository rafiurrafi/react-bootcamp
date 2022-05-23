import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  const itemInCart = cartItems.find((item) => item.id === itemToAdd.id);
  if (itemInCart) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return { ...itemToAdd, quantity: 1 };
};

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === itemToRemove.id
  );
  if (existingCartItem.quantity === 1)
    return cartItems.filter((item) => item.id !== existingCartItem.id);

  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (itemToAdd) => {
    addCartItem(setCartItems(itemToAdd));
  };
  const removeItemFromCart = (itemToRemove) => {
    removeCartItem(setCartItems(itemToRemove));
  };
  const value = { isCartOpen, setIsCartOpen, cartCount, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
