const RegularList = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
