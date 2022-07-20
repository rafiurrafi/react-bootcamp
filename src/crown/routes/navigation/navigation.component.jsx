import { Link, Outlet } from "react-router-dom";
const Navigation = () => (
  <>
    <div className="navigation">
      <Link to="/" className="logo-container">
        Logo
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/sign-in">
          Sign in
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
