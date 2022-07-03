import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import { CardContext } from "../../context/card.context";
const CardIcon = () => {
  const { cardOpen, setCardOpen } = useContext(CardContext);
  return (
    <div onClick={() => setCardOpen(!cardOpen)}>
      <ShoppingIcon />
    </div>
  );
};

export default CardIcon;
