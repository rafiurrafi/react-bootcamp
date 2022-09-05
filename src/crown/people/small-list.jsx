const SmallList = ({ person }) => {
  const { name, age } = person;
  return (
    <>
      <h3>
        {name} - {age}
      </h3>
    </>
  );
};

export default SmallList;
