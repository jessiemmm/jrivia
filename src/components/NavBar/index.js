import Logout from "../Logout";
import {Link} from "react-router-dom"

function NavBar() {
    const userButton = () => {
        if(localStorage.getItem("user")) {
            //TODO: add user icon link to user profile
            return(<Logout/>)
        } else {
            return (
                <Link to="/signin">
                    <button type ="button" className="btn btn-secondary">Sign In</button>
                </Link>
                
            )
        }
    }


    return (
        <nav style={{position:"sticky", top:"0", zIndex:"100"}} className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">JRIVIA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Privacy</a>
                        </li>
                    </ul>
                    {userButton()}
                </div>
            </div>
        </nav>
    )
}

    export default NavBar;