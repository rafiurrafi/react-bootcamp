const LargeList = ({ person }) => {
  const { name, age, hobbies } = person;
  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      {hobbies.map((hobby) => (
        <li key={hobby}>{hobby}</li>
      ))}
    </div>
  );
};

export default LargeList;
