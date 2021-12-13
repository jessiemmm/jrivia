import userService from "../services/user-service"
import {useEffect, useState} from "react"
import  { Link } from 'react-router-dom'

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
            <input type="text" id="username-input" onChange={event => setUsername(event.target.value)}/>
            <input type="password" id="password-input" onChange={event => setPassword(event.target.value)}/>
            <button onClick={attemptSignin}>
                SUBMIT
            </button>

            <p value={signedin}>{signedin}</p>
            <Link to="/" >Home</Link>
        </div>
    )
    //}

}

export default Signin;