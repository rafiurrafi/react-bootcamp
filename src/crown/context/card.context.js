import { createContext, useEffect, useState } from "react";
const addCardItem = (cardItems, itemToAdd) => {
  const existingItem = cardItems.find((item) => item.id === itemToAdd.id);
  if (existingItem)
    return cardItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  return [...cardItems, { ...itemToAdd, quantity: 1 }];
};
const removeCardItem = (cardItems, itemToRemove) => {
  const existingItem = cardItems.find((item) => item.id === itemToRemove.id);
  if (existingItem.quantity == 1)
    return cardItems.filter((item) => item.id !== itemToRemove.id);
  return cardItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
export const CardContext = createContext({
  cardOpen: false,
  setCardOpen: () => {},
  cardItems: [],
  addItemToCard: () => {},
  removeItemFromCard: () => {},
  cartItemsCount: 0,
  cartTotal : 0
});

const CardProvider = ({ children }) => {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)
  const addItemToCard = (itemToAdd) => {
    setCardItems(addCardItem(itemToAdd));
  };
  const removeItemFromCard = (itemToRemove) => {
    setCardItems(removeCardItem(cardItems, itemToRemove));
  };
  const value = {
    cardOpen,
    cardItems,
    cartItemsCount,
    addItemToCard,
    removeItemFromCard
    setCardOpen,
  };

  useEffect(() => {
    const newCartItems = cardItems.reduce(
      (total, cardItem) => total + cardItems.quantity,
      0
    );
    setCartItemsCount(newCartItems);
  }, [cardItems]);
  useEffect(() => {
   const total = cardItems.reduce((total, cardItems) => total + cardItems.price*cardItems.quantity, 0)
   setCartTotal(total)
  }, [cardItems])
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};

export default CardProvider;
