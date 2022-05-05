import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";
const Navigation = () => {
    return ( 
        <>
            <div className="navigation">
                <div className="logo-container">
                    <Link to = "/">Logo</Link>
                </div>
                <div className="nav-link-container">
                    <Link className="nav-link" to = "/">Home</Link>
                </div>
            </div>
            <Outlet />
        </>
     );
}
 
export default Navigation;