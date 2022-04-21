import React from "react";
import "./categoryItem.style.scss";
const CategoryItem = ({ id, imageUrl, title }) => {
  return (
    <div key={id} className="category-container">
      <div style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
