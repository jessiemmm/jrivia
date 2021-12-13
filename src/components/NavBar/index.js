import Logout from "../Logout";
import {Link} from "react-router-dom"
import './index.css'

function NavBar() {
    const userButton = () => {
        if(localStorage.getItem("user")) {
            let name = JSON.parse(localStorage.getItem("user")).username;
            return(
                <>
                    <Link to={'/profile/' + name}>
                        <button type="button" className="btn btn-outline-secondary">
                            <i className="far fa-user"> My Profile</i>
                        </button>
                    </Link>
                    <Logout/>
                    </>)
        } else {
            return (
                <>
                    <Link to="/register">
                        <button type="button" className="btn btn-outline-secondary">
                            Register
                        </button>
                    </Link>
                    <p className="mt-3"> &nbsp; &nbsp;</p>
                <Link to="/signin">
                    <button type="button" className="btn btn-outline-secondary">
                        Sign In
                    </button>
                </Link>
            </>
                
            )
        }
    }


    return (
        <nav style={{position:"sticky", top:"0", zIndex:"100"}} className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">JRIVIA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/search">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/privacy">Privacy</a>
                        </li>
                    </ul>
                    {userButton()}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;