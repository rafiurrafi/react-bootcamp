import Category from "../category/category.component";

const Directory = ({ data }) => {
  return (
    <div>
      {data.map(({ ...props }) => (
        <Category {...props} />
      ))}
    </div>
  );
};

export default Directory;
