import React, { createContext, useReducer } from "react";

export const BasketContext = createContext();
const BasketProvider = ({ reducer, initialState, children }) => {
  return (
    <BasketContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
