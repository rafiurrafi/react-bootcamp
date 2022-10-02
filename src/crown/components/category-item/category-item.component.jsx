const CategoryItem = ({ category }) => {
  const { title } = category;
  return (
    <div className="category-container">
      <h2>{title}</h2>
      <p>Shop now</p>
    </div>
  );
};

export default CategoryItem;
