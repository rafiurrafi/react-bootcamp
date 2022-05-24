import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";
export const ProductContext = createContext({ products: [] });

const ProductProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA);
  const value = { products };
  console.log(SHOP_DATA);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
