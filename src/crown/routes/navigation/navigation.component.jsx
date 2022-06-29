import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link to="/">Crwn</Link>
      <div>
        <Link to="/shop">Shop</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
