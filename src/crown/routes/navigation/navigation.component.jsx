import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="nav-links">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="nav-links">
        <Link to="/sign-in">Sign in</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
