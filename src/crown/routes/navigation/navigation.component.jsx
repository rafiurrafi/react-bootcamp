import { Link, Outlet } from "react-router-dom";
const Navigation = () => (
  <>
    <div className="navigation">
      <div className="logo-container">
        <Link to="/">Loog</Link>
      </div>
      <div className="nav-links-container">
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
      </div>
      <div className="nav-links-container">
        <Link to="/sign-in" className="nav-link">
          Login
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);
export default Navigation;
