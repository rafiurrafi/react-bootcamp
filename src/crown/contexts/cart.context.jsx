import { createContext, useState, useEffect, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEM":
      return {
        ...state,
        ...payload,
      };
    case "TOGGLE_CART":
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};
// {
//   isCartOpen : false,
//   cartItems :[{id : 1, cart : "hello"}],
//   cartCount : 10,
//   cartTotal : 300
// }

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemReducer = (newCartItem) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({
      type: "SET_CART_ITEM",
      payload: {
        cartItems: newCartItem,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItem = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItem);
  };

  const removeItemToCart = (cartItemToRemove) => {
    const newCartItem = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemReducer(newCartItem);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItem = clearCartItem(cartItems, cartItemToClear);
    updateCartItemReducer(newCartItem);
  };
  const setIsCartOpen = (bool) => {
    dispatch({ type: "TOGGLE_CART", payload: { isCartOpen: bool } });
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
