import { CART_ACTION_TYPES } from "../../contexts/cart.context";
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const CartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return { ...state, ...payload };
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};
