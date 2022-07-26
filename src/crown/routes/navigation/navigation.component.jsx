import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/">Logo</Link>
        <div className="nav-links-container">
          <Link to="/shop">Shop</Link>
          <Link to="/sign-in">Sign in</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
