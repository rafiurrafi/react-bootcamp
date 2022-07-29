import { useState } from "react";
import Checkbox from "./zash/checkbox";
import { playerService } from "./zash/playerService";
const App = () => {
  const [filters, setFilters] = useState([]);

  const handleFilter = (selectedfilters) => {
    setFilters(selectedfilters);
  };

  const updatedPlayers = filters.length
    ? playerService.filter((player) => filters.includes(player.playing))
    : playerService;
  return (
    <div>
      <Checkbox onFilter={(p) => handleFilter(p)} />
      <div style={{ marginTop: 30 }}>
        <h2>Player list</h2>
        <div className="grid">
          {updatedPlayers.map(({ id, name, playing }) => (
            <div key={id}>
              <h4>{name}</h4>
              <p>{playing}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
