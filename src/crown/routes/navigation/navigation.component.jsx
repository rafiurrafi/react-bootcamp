import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Logo</Link>
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/sign-in">Shop</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
