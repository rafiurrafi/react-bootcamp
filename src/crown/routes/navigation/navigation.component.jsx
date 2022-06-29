import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <Link to="/">Crwn</Link>
      <div>
        <Link to="/shop">Shop</Link>
        {!currentUser ? (
          <Link to="/sign-in">Sign in</Link>
        ) : (
          <div>sign out</div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
