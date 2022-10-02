import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div>
        <Link to="/">Logo</Link>
        <div>
          <Link to="/shop">Shop</Link>
        </div>
        <div>
          <Link to="/sign-in">Sign in</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
