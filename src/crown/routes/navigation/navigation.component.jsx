import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Navigation = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to="/">
        Logo
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);
export default Navigation;
