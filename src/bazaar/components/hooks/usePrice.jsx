import { useState, useEffect } from "react";

const usePrice = (carts, products) => {
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
  return price;
};

export default usePrice;
