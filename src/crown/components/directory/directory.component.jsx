import "./directory.style.scss";
import CategoryItem from "../category-item/category-item.component";
const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ id, ...props }) => (
        <CategoryItem key={id} {...props} />
      ))}
    </div>
  );
};

export default Directory;
