import React, { useEffect, useState } from "react";
import "../styles/cardOverview.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import usePrice from "./hooks/usePrice";
const CardOverview = ({ length, carts, products, onShowDetails }) => {
  const price = usePrice(carts, products);
  return (
    <div className="card-overview" onClick={onShowDetails}>
      <p className="card-overview__item">
        <AiOutlineShoppingCart />
        <span>{length} item</span>
      </p>
      <p className="card-overview__price">${price.toFixed(2)}</p>
    </div>
  );
};

export default CardOverview;
