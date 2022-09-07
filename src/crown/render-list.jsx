const RenderList = ({ items, component: Component, object }) => {
  return (
    <div>
      {items.map((item) => (
        <>
          <Component {...{ [object]: item }} />
        </>
      ))}
    </div>
  );
};

export default RenderList;
