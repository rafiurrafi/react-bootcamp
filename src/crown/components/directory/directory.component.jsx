import React from "react";
import CategoryItem from "../category-item/categoryItem.component";
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((props) => {
        return <CategoryItem {...props} />;
      })}
    </div>
  );
};

export default Directory;
