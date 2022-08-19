import { Link, Outlet } from "react-router-dom";
const Navigation = () => (
  <>
    <div>
      <Link to="/">Logo</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/authentication">Sign up</Link>
    </div>
    <Outlet />
  </>
);
export default Navigation;
