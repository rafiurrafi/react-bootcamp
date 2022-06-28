const MonsterApp = () => {
  const monsters = [
    {
      id: 1,
      name: "Illena D'cruz",
    },
    {
      id: 2,
      name: "Nikita Dutt",
    },
    {
      id: 3,
      name: "Katrina Kaif",
    },
    {
      id: 4,
      name: "Urbashi Ratoula",
    },
    {
      id: 5,
      name: "Puja Hegde",
    },
  ];
  return (
    <div className="monster">
      <h1>Monster app</h1>
      <div>
        {monsters.map(({ id, name }) => (
          <div className="" key={id}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonsterApp;
