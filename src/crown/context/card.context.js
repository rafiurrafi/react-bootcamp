import { createContext, useState } from "react";

export const CardContext = createContext({
  cardOpen: false,
  setCardOpen: () => {},
});

const CardProvider = ({ children }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const value = { cardOpen, setCardOpen };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export default CardProvider;
