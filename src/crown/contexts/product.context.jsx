import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductContext = createContext({});
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products };
  console.log(value);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
