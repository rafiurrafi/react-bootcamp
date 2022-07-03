import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CardIcon from "../../components/card-icon/card-icon.component";
import Dropdown from "../../components/dropdown/dropdown.component";
import { CardContext } from "../../context/card.context";
import { UserContext } from "../../context/user.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cardOpen } = useContext(CardContext);
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
        <CardIcon />
        {cardOpen && <Dropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
