const LargeList = ({ person }) => {
  const { name, age, hobbies } = person;
  return (
    <div>
      <h4>
        {name} - {age}
      </h4>
      <ul>{hobbies.map((hobby) => hobby)}</ul>
    </div>
  );
};

export default LargeList;
