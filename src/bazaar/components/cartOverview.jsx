import React, { useEffect, useState } from "react";
import "../styles/cardOverview.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CardOverview = ({ length, carts, products }) => {
  const [price, setPrice] = useState(0.0);

  useEffect(() => {
    const newPrice = carts.reduce((accumulator, currentValue) => {
      const product = products.filter(
        (product) => product.id === currentValue.id
      );
      return accumulator + currentValue.itemNumber * product[0].price;
    }, 0);
    setPrice(newPrice);
  }, [carts, products]);
  return (
    <div className="card-overview">
      <p className="card-overview__item">
        <AiOutlineShoppingCart />
        <span>{length} item</span>
      </p>
      <p className="card-overview__price">${price}</p>
    </div>
  );
};

export default CardOverview;
