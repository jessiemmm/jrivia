import {useState} from "react"
import {Link} from "react-router-dom"
import userService from "../services/user-service"
import NavBar from "./NavBar";

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [modSelected, setModSelected] = useState(false)
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const register = () => {
        let user_type;
        if(modSelected) {
            user_type = "moderator"
        } else {
            user_type = "general"
        }
        if(password.length > 5) {
            userService.createUser({
                user_type: user_type,
                username: username,
                password: password
            }).then(res => {
                if (res.msg === "User already exists") {
                    setError("User already exists")
                } else {
                    setSuccess("Success!")
                    localStorage.setItem("user", JSON.stringify(res));
                }
            })
        } else {
            setPasswordError("Password is too short!");
        }
        
        console.log(username, password, modSelected);
    }



    return (
        <div>
            <NavBar/>
            <br></br>
            <div>
                <div className="container">
                    <div className="card border-dark mb-3" id="signin-card">
                        <div className="card-header">Don't have an account?</div>
                        <div className="card-body">
                            <h4 className="card-title">Register</h4>
                            <p className="card-text">
                                <div className="form-group">
                                    <label className="col-form-label mt-4" htmlFor="inputDefault">Username</label>
                                    <input type="text" className="form-control"
                                           id="username-input"
                                           value={username}
                                           onChange={(event) => setUsername(event.target.value)}/>
                                    {error}
                                </div>
                                <div className="form-group mb-3">
                                    <label className="col-form-label mt-4" htmlFor="passwordDefault">Password</label>
                                    <input type="password" className="form-control"
                                           id="password-input"
                                           value={password}
                                           onChange={(event) => setPassword(event.target.value)}/>
                                    {passwordError}
                                </div>

                                <div>
                                    <div className="form-check form-switch mb-2">
                                        <input className="form-check-input" type="checkbox"
                                               id="flexSwitchCheckDefault"
                                               onChange={() => {
                                                   setModSelected(!modSelected)
                                               }}/>
                                            <label className="form-check-label"
                                                   htmlFor="flexSwitchCheckDefault">Moderator</label>
                                    </div>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary btn-lg" onClick={register}>
                                        Register
                                    </button>

                                    &nbsp;
                                    {success}
                                </div>
                                <div className="privacy-link">
                                    <Link to="/privacy">Privacy Policy</Link>
                                </div>


                            </p>

                        </div>
                    </div>
                </div>

            </div>

        </div>
        
    )



}
export default Register;