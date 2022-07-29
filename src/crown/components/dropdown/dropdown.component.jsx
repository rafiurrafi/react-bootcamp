import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();
  return (
    <div className="dropdown">
      <button onClick={() => navigate("/checkout")}>Checkbox</button>
    </div>
  );
};

export default Dropdown;
