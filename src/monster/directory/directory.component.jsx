import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="category-containers">
      {categories.map(({ id, ...props }) => (
        <CategoryItem key={id} {...props} />
      ))}
    </div>
  );
};

export default Directory;
