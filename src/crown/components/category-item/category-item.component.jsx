import "./category-item.style.scss";
const CategoryItem = ({ title, imageUrl }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h3>{title}</h3>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
