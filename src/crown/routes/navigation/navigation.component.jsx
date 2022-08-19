import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <div>
        <Link to="/">Logo</Link>
        <Link to="/shop">Shop</Link>
        {currentUser ? (
          <span>Sign Out</span>
        ) : (
          <Link to="/authentication">Sign up</Link>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
