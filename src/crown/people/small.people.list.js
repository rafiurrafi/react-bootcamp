const SmallPeopleList = ({ person: { name, age } }) => {
  return (
    <h4>
      {name}- {age}
    </h4>
  );
};

export default SmallPeopleList;
