const RenderList = ({ items, resourceKey, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent {...{ [resourceKey]: item }} />
      ))}
    </>
  );
};

export default RenderList;
