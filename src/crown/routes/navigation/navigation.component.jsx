import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/sign-in">Sign in</Link>
      <Outlet />
    </div>
  );
};

export default Navigation;
