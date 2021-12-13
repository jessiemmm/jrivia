import userService from "../services/user-service";
import {Link} from "react-router-dom";


function Logout() {
    const logout = () => {
        if(localStorage.getItem("user")){
            localStorage.removeItem("user");
        }

    }

    return (
        <Link to="/">
            <button type="button" className="btn btn-secondary" onClick={logout}>
                Logout
            </button>
        </Link>
    )
}

export default Logout;