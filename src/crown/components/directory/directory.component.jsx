import Category from "../category-container/category.components";
const Directory = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <div className="categories-container">
        {categories.map(({ id, ...props }) => (
          <Category key={id} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
