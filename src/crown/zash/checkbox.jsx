import { useState } from "react";
import { gameService } from "./game-service";
const Checkbox = ({ onFilter }) => {
  const [filters, setFilters] = useState([]);
  const handleChange = (name) => {
    const updated = [...filters];
    if (!updated.includes(name)) {
      updated.push(name);
    } else {
      updated.splice(updated.indexOf(name), 1);
    }
    setFilters(updated);
    onFilter(updated);
  };
  return (
    <div className="checkbox">
      {gameService.map(({ name, id }) => (
        <div key={id}>
          <label htmlFor={name}>{name}</label>
          <input id={id} type="checkbox" onChange={() => handleChange(name)} />
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
