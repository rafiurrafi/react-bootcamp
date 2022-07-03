import { createContext, useState } from "react";
const addCardItem = (cardItems, itemToAdd) => {
  const existingItem = cardItems.find((item) => item.id === itemToAdd.id);
  if (existingItem)
    return cardItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  return [...cardItems, { ...itemToAdd, quantity: 1 }];
};
export const CardContext = createContext({
  cardOpen: false,
  setCardOpen: () => {},
  cardItems: [],
  addItemToCard: () => {},
});

const CardProvider = ({ children }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const value = { cardOpen, setCardOpen };
  const addItemToCard = (itemToAdd) => {
    setCardItems(addCardItem(itemToAdd));
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export default CardProvider;
