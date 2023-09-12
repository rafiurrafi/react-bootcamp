import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/sign-in">Sign in</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
