import "./category-item.style.scss";
const CategoryItem = ({ title }) => {
  return (
    <div className="category-container">
      {/* <img src="" alt="" /> */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
