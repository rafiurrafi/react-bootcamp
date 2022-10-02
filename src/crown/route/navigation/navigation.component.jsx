import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { signOutuser } from "../../utils/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  async function handleSignOut() {
    await signOutuser();
    setCurrentUser(null);
  }
  return (
    <>
      <div>
        <Link to="/">Logo</Link>
        <div>
          <Link to="/shop">Shop</Link>
        </div>
        <div>
          {currentUser ? (
            <div onClick={handleSignOut}>Sign out</div>
          ) : (
            <Link to="/sign-in">Sign in</Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
