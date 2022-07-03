import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../context/card.context";
import Button from "../button/button.component";
import CardItem from "../card-item/card-item.component";

const Dropdown = () => {
  const { cardItems } = useContext(CardContext);
  const navigate = useNavigate();
  const checkoutPageHandler = () => {
    navigate("/checkout");
  };
  return (
    <div>
      {cardItems.map((item) => (
        <div>
          <CardItem key={item.id} {...item} />
        </div>
      ))}
      <Button onClick={checkoutPageHandler}>Chekcout</Button>
    </div>
  );
};

export default Dropdown;
