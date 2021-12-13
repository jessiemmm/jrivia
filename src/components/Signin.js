import userService from "../services/user-service"
import {useEffect, useState} from "react"
import  { Link } from 'react-router-dom'
import NavBar from "./NavBar";
import './index.css'

function Signin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [signedin, setSignedIn] = useState("");
    
    useEffect(() => {
        if(localStorage.getItem("user"))
            setSignedIn("Welcome " + JSON.parse(localStorage.getItem("user")).username)
    }, [])

    function attemptSignin(){
        const user = {
            username: username,
            password: password
        }

        userService.login(user).then(
            res => {
                console.log()
                if(res.msg === "logging in") {
                    localStorage.setItem("user", JSON.stringify(res.existingUser[0]));
                    setSignedIn("Welcome " + JSON.parse(localStorage.getItem("user")).username);
                } else {
                    setSignedIn(res.msg);
                }
            }
        );
        
    }

    return (
        <div>
            <NavBar/>
            <div className="card border-dark mb-3">
                <div className="card-header">Have an account?</div>
                <div className="card-body">
                    <h4 className="card-title">Sign In</h4>
                    <p className="card-text">
                        <div className="form-group">
                            <label className="col-form-label mt-4" htmlFor="inputDefault">Username</label>
                            <input type="text" className="form-control"
                                   id="username-input"
                                   onChange={event => setUsername(event.target.value)}/>
                        </div>
                        <div className="form-group mb-3">
                            <label className="col-form-label mt-4" htmlFor="passwordDefault">Password</label>
                            <input type="password" className="form-control"
                                   id="password-input"
                                   onChange={event => setPassword(event.target.value)}/>
                        </div>
                        <button type="button" className="btn btn-primary btn-lg" onClick={attemptSignin}>
                            SUBMIT
                        </button>

                        <p value={signedin}>{signedin}</p>
                        <div className="privacy-link">
                            <Link to="/privacy">Privacy Policy</Link>
                        </div>

                    </p>

                </div>
            </div>
            {/*<input type="text" id="username-input" onChange={event => setUsername(event.target.value)}/>
            <input type="password" id="password-input" onChange={event => setPassword(event.target.value)}/>
            <button onClick={attemptSignin}>
                SUBMIT
            </button>

            <p value={signedin}>{signedin}</p>
            <Link to="/" >Home</Link>*/}
        </div>
    )
    //}

}

export default Signin;