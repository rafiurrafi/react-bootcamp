import Category from "../category/category.component";
const Directory = ({ categories }) => {
  return (
    <div>
      {categories.map(({ id, ...props }) => (
        <Category key={id} {...props} />
      ))}
    </div>
  );
};

export default Directory;
