const LargePeopleList = ({ person: { name, age, hairColor, hobbies } }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{hairColor}</p>
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

export default LargePeopleList;
