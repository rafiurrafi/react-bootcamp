import { createContext, useState } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingItem)
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find((item) => item.id === itemToRemove.id);
  if (existingItem.quantity === 1)
    return cartItems.filter((item) => item.id !== itemToRemove);
  return [
    ...cartItems,
    { ...itemToRemove, quantity: itemToRemove.quantity - 1 },
  ];
};
export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => false,
  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
});
const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };
  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };
  console.log(cartItems);
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartProvider;
