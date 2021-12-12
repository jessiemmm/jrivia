import userService from "../services/user-service"
import {useEffect, useState} from "react"
import  { Link } from 'react-router-dom'

function Signin() {
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [signedin, setSignedIn] = useState(false);
    

    const attemptSignin = () => {
        const user = {
            username: username,
            password: password
        }

        userService.login(user).then(
            res => {
                if(res.msg === "logging in") {
                    setSignedIn(true);
                    localStorage.setItem("user", JSON.stringify(res.existingUser[0]));
                }
            }
        )
    }
    
    //if(localStorage.getItem("user")) {
    // //   return (<Navigate to="/" />)
    //} else {

    return (
        <div>
            <input type="text" id="username-input" onChange={event => setUsername(event.target.value)}/>
            <input type="password" id="password-input" onChange={event => setPassword(event.target.value)}/>
            <button onClick={attemptSignin}>
                SUBMIT
            </button>
            <p>{(signedin? 
                (<p>You are signed in, {JSON.parse(localStorage.getItem("user")).username}! <Link to="/"><button>Home</button></Link></p>)
                : <></>
                )}
            </p>

        </div>
    )
    //}

}

export default Signin;