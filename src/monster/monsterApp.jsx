import { useEffect, useState } from "react";

const MonsterApp = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  useEffect(() => {
    const updated = monsters.filter((monster) =>
      monster.name.includes(searchQuery)
    );
    console.log(searchQuery);
    setMonsters(updated);
  }, [searchQuery]);

  //   const updated = monsters.filter((monster) =>
  //     monster.name.includes(searchQuery)
  //   );

  return (
    <div className="monster">
      <h1>Monster app</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
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
