import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";
export const CategoryContext = createContext({ categories: [] });
const CategoryProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
