import userService from "../services/user-service"
import {useEffect, useState} from "react"

function Signin() {
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [signedin, setSignedIn] = useState(false);
    

    const attemptLogin = () => {
        const user = {
            username: username,
            password: password
        }
        userService.login(user).then(
            res => {
                if(res[0].msg === "logging in") {
                    setSignedIn(true);
                }
            }
        )
    }
    

    return (
        <div>
            <input type="text" id="username-input" onChange={event => setUsername(event.target.value)}/>
            <input type="password" id="password-input" onChange={event => setPassword(event.target.value)}/>
            <button onClick={attemptLogin}>
                SUBMIT
            </button>
        </div>
    )


}

export default Signin;