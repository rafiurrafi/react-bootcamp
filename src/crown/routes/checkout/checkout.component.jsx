import { useContext } from "react";
import { CardContext } from "../../context/card.context";

const Checkout = () => {
  const { cardItems } = useContext(CardContext);
  return (
    <div>
      {cardItems.map((item) => (
        <div>
          <h2>{item.name}</h2>
          <button>+</button>
          {item.cardItemsCount}
          <button>-</button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
