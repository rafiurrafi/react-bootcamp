import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link to="/">Crwn</Link>
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/sign-in">Sign in</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
