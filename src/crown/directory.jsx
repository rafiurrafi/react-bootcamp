import CategoryItem from "./category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <CategoryItem title={title} />
      ))}
    </div>
  );
};

export default Directory;
