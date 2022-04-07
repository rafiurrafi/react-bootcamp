import React from "react";

const CartItem = ({ item: { imgUrl, price, name, qunatity } }) => {
  return (
    <div className="cart-item">
      <img src={imgUrl} alt="" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {qunatity} ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
