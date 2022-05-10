import { Link, Outlet } from "react-router-dom";
import "./navigation.style.scss";
const Navigation = () => {
    return ( 
       <>
        <div>
            <Link to= "/">Crown</Link>
            <Link to = "/sign-in" >Sign in</Link>
        </div>
        <Outlet />
       </>
     );
}
 
export default Navigation;