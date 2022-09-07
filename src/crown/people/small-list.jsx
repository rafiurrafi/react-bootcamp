const SmallList = ({ person }) => {
  const { name, age } = person;
  return (
    <div>
      <p>
        {name}-{age}
      </p>
    </div>
  );
};

export default SmallList;
