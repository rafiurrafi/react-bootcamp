import { createContext, useState } from "react";
// function addItemToCart(cartItems, itemToAdd) {
//   const foundItem = cartItems.find((item) => item.id === itemToAdd.id);

//   if (foundItem) {
//     const items = cartItems.map((item) =>
//       item.id === itemToAdd.id
//         ? { ...item, quantity: item.quantity + 1 }
//         : itemToAdd
//     );
//     return items;
//   }
//   console.log([...cartItems, { ...itemToAdd, quantity: 1 }]);
//   return [...cartItems, { ...itemToAdd, quantity: 1 }];
// }
function addItemToCart(cartItems, itemToAdd) {
  const foundItem = cartItems.find((item) => item.id === itemToAdd.id);
  console.log(foundItem);
}
function removeItemFromCart(cartItems, itemToRemove) {
  const foundItem = cartItems.find((item) => item.id === itemToRemove.id);
  if (foundItem.quantity === 1)
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...itemToRemove, quantity: item.quantity - 1 }
      : item
  );
}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => false,
  cartItems: [],
  addCartItem: () => null,
  cartTotal: 0,
  cartCount: 0,
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function addCartItem(itemToAdd) {
    setCartItems(addItemToCart(cartItems, itemToAdd));
  }
  const value = { isCartOpen, setIsCartOpen, cartItems, addCartItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
