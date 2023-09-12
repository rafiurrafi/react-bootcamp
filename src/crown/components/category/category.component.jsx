const Category = (props) => {
  return (
    <div key={props.id}>
      <h4>{props.name}</h4>
      <button>Shop now</button>
    </div>
  );
};

export default Category;
